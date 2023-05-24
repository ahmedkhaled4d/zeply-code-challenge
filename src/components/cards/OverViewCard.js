import PropTypes from 'prop-types';

// material-ui
import { Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined } from '@ant-design/icons';
import { formatValueCurrency } from 'utils/formatValueCurrency';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const OverViewCard = ({ color, title, value, percentage, currency }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {formatValueCurrency(value, currency)}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
  </MainCard>
);

OverViewCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
  percentage: PropTypes.number,
  currency: PropTypes.string
};

OverViewCard.defaultProps = {
  color: 'primary'
};

export default OverViewCard;
