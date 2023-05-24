import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { BellOutlined } from '@ant-design/icons';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  IconButton,
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
  Stack,
  LinearProgress
} from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';
import moment from 'moment';
import axiosChainApi from 'utils/axios/api';

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
    id: 'confirmations',
    numeric: true,
    disablePadding: false,
    label: 'confirmations'
  },
  {
    id: 'size',
    numeric: true,
    disablePadding: false,
    label: 'Size'
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

function RecentTableHead() {
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

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Confirmed';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

function RecentTableToolbar(props) {
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
          <IconButton aria-label="delete" size="small">
            <BellOutlined />
          </IconButton>
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

RecentTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function RecentTable() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [rowCount, setRowCount] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axiosChainApi.get(`/block/latest/tx?page=${page + 1}`);
      setRows(response.data.list);
      setRowCount(response.data.total_count);
      setLoading(false);
    }
    fetchData();
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
      <RecentTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'small'}>
          <RecentTableHead numSelected={selected.length} rowCount={rowCount} />
          {rows && (
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.hash);
                const labelId = `Recent-table-checkbox-${index}`;

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

                    <TableCell> {moment.unix(row.block_time).fromNow()}</TableCell>
                    <TableCell>
                      <OrderStatus status={row.confirmations} />
                    </TableCell>
                    <TableCell> {row.size} byte</TableCell>
                    <TableCell>
                      {row.inputs_value / 100000000} ({row.inputs_count} inputs)
                    </TableCell>
                    <TableCell>
                      {row.outputs_value / 100000000} ({row.outputs_count} outputs)
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
