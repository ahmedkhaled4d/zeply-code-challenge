// material-ui
import { CardMedia, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import Zeply from 'assets/images/Zeply-logo.png';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={Zeply} sx={{ width: 112 }} />
      <Stack alignItems="center">
        <Typography variant="h5">zeply Challange</Typography>
      </Stack>
    </Stack>
  </MainCard>
);

export default NavCard;
