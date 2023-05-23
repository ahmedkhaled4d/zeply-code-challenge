// material-ui
import { List, ListItemButton, ListItemText, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DeveloperPage = () => (
  <Grid item xs={12} md={6}>
    <MainCard sx={{ mt: 2 }} content={false}>
      <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
        <ListItemButton divider>
          <ListItemText primary="Twitter" />
          <Typography variant="h5">@ahmedkhaled4d</Typography>
        </ListItemButton>
        <ListItemButton divider>
          <ListItemText primary="linkedin" />
          <Typography variant="h5">@ahmedkhaled4d</Typography>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Email" />
          <Typography variant="h5">ahmedkhaled4d@gmail.com</Typography>
        </ListItemButton>
      </List>
    </MainCard>
  </Grid>
);

export default DeveloperPage;
