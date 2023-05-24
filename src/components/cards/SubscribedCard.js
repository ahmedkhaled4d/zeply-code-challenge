import PropTypes from 'prop-types';
import moment from 'moment';
// material-ui
import { Link, Chip, Grid, Stack, Typography } from '@mui/material';

// assets
import { CopyOutlined } from '@ant-design/icons';
import { formatValueCurrency } from 'utils/formatValueCurrency';
import MainCard from 'components/MainCard';

// ==============================|| SubscribedCard CARD  ||============================== //
const copyHash = (hash) => {
  return navigator.clipboard.writeText(hash);
};

const SubscribedCard = ({ data, currency }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack direction="row" spacing={2}>
      <Chip label={<CopyOutlined />} onClick={() => copyHash(data.hash)} />
      <Typography>
        {data.hash.slice(0, 7)}....{data.hash.slice(55)}
      </Typography>
      <Typography>from {data.inputs.length} inputs </Typography>
      <Typography>To {data.out.length} outputs </Typography>
    </Stack>
    <Stack>
      <Typography sx={{ color: 'text.secondary' }}>- {moment.unix(data.time).fromNow()}</Typography>
      <Grid container>
        <Grid item xs={4}>
          From
          <ul>
            {data.inputs?.map((row, index) => (
              <li key={index}>
                <Link href={`/address/${row.addr}`}>
                  {row.addr?.slice(0, 7)}....{row.addr?.slice(10)}
                </Link>
                - {formatValueCurrency(row.value, currency)}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={8}>
          TO
          <ul>
            {data.out?.map((out, index) => (
              <li key={index}>
                <Link href={`/address/${out.addr}`}>
                  {out.addr?.slice(0, 7)}......{out.addr?.slice(35)}
                </Link>
                - {formatValueCurrency(out.value, currency)}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

SubscribedCard.propTypes = {
  data: PropTypes.object,
  currency: PropTypes.string
};

SubscribedCard.defaultProps = {
  color: 'primary'
};

export default SubscribedCard;
