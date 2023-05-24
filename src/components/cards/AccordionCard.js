import PropTypes from 'prop-types';
import moment from 'moment';
// material-ui
import { AccordionDetails, Accordion, AccordionSummary, Chip, Grid, Stack, Typography } from '@mui/material';

// assets
import { RiseOutlined, FallOutlined, CopyOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { formatValueCurrency } from 'utils/formatValueCurrency';

// ==============================|| AccordionCard CARD  ||============================== //
const copyHash = (hash) => {
  return hash;
};

const AccordionCard = ({ hash, balance, fee, inputs, out, result, time, currency }) => (
  <Accordion TransitionProps={{ unmountOnExit: true }}>
    <AccordionSummary expandIcon={<ArrowDownOutlined />} aria-controls={hash} id={hash}>
      <Stack direction="row" spacing={2}>
        <Chip label={<CopyOutlined />} onClick={() => copyHash(hash)} />
        <Typography>
          {hash.slice(0, 7)}....{hash.slice(55)}
        </Typography>
        <Typography>{balance / 100000000} BTC</Typography>
        <Typography>from {inputs.length} inputs </Typography>
        <Typography>To {out.length} outputs </Typography>
        <Chip
          variant="combined"
          color={result > 0 ? 'success' : 'error'}
          icon={
            result > 0 ? (
              <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />
            ) : (
              <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />
            )
          }
          label={result > 0 ? <p>Incoming Tx</p> : <p>Outgoing Tx</p>}
          sx={{ ml: 1.25, pl: 1 }}
          size="small"
        />
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Stack spacing={2}>
        <Typography variant="h2">- Balance {formatValueCurrency(balance, currency)}</Typography>
        <Typography variant="overline">- Fees {formatValueCurrency(fee, currency)}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>- {moment.unix(time).format('MMMM Do YYYY')}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            From
            <ul>
              {inputs.map((input, index) => (
                <li key={index}>
                  {input.prev_out?.addr} - {formatValueCurrency(input.prev_out?.value, currency)}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            TO
            <ul>
              {out.map((out, index) => (
                <li key={index}>
                  {out.addr} - {out.value / 100000000} BTC
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Stack>
    </AccordionDetails>
  </Accordion>
);

AccordionCard.propTypes = {
  hash: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.number,
  fee: PropTypes.number,
  weight: PropTypes.number,
  result: PropTypes.number,
  time: PropTypes.number,
  inputs: PropTypes.array,
  out: PropTypes.array
};

AccordionCard.defaultProps = {
  color: 'primary'
};

export default AccordionCard;
