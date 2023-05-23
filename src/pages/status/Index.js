import { Link } from 'react-router-dom';
// material-ui
import { Grid, Stack, Typography } from '@mui/material';
// project import
import StatusWrapper from './StatusWrapper';

// ================================|| Status Message ||================================ //

const Error = () => (
  <StatusWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h1">404</Typography>
          <Typography component={Link} to="/" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Back to home ?
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  </StatusWrapper>
);

export default Error;
