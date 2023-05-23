// material-ui
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';

// project import
import EnhancedTable from './EnhancedTable';
import ReportAreaChart from './ReportAreaChart';

import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardExplorer = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 Counters */}
      <Grid item xs={12} md={8} lg={9}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <EnhancedTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardExplorer;
