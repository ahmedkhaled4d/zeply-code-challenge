import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

// material-ui
import {
  Box,
  Link,
  Checkbox,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Typography,
  LinearProgress
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const headCells = [
  {
    id: 'hash',
    numeric: false,
    disablePadding: true,
    label: 'TNX hash'
  },
  {
    id: 'block_time',
    numeric: true,
    disablePadding: false,
    label: 'Time'
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'size',
    numeric: true,
    disablePadding: false,
    label: 'Size (in byte)'
  },

  {
    id: 'tota_BTC_input_volume',
    numeric: true,
    disablePadding: false,
    label: 'input volume (BTC) '
  },
  {
    id: 'tota_BTC_output_volume',
    numeric: true,
    disablePadding: false,
    label: 'output volume (BTC) '
  },
  {
    id: 'fees',
    numeric: true,
    disablePadding: false,
    label: 'fees(BTC)'
  }
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} padding={headCell.disablePadding ? 'none' : 'normal'}>
            <TableSortLabel direction={'asc'}>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          Subscribe to {numSelected} selected Txn address
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Recent Transactions
        </Typography>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function EnhancedTable() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [rowCount, setRowCount] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    setLoading(true);
    const getLatestTransactions = async (page) =>
      await fetch(`https://chain.api.btc.com/v3/block/latest/tx?page=${page + 1}`).then((data) => data.json());
    getLatestTransactions(page)
      .then((data) => {
        setRows(data.data.list);
        setRowCount(data.data.total_count);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [page]);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: '100%' }}>
      {loading && <LinearProgress />}
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'small'}>
          <EnhancedTableHead numSelected={selected.length} rowCount={rowCount} />
          {rows.length > 1 && (
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.hash);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.hash)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.hash}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" align="left">
                      <Link color="secondary" component={RouterLink} to="">
                        {row.hash.slice(0, 8)}.....{row.hash.slice(55)}
                      </Link>
                    </TableCell>

                    <TableCell> {row.block_time}</TableCell>
                    <TableCell> done</TableCell>
                    <TableCell> {row.size}</TableCell>
                    <TableCell>
                      {row.inputs_value / 100000000} ({row.inputs_coun} input)
                    </TableCell>
                    <TableCell>
                      {row.outputs_value / 100000000} ({row.outputs_count} input)
                    </TableCell>
                    <TableCell>{row.fee / 100000000}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rowCount}
        rowsPerPage="10"
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
}
