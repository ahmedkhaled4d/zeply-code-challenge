// material-ui
import { Typography, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DocumentationsPage PAGE ||============================== //

const DocumentationsPage = () => (
  <MainCard>
    <Stack spacing={2}>
      <Typography variant="body2">
        challenge to build a simple app, using either ReactJS or React Native, which retrieves address and transaction information from the
        BTC blockchain. It also allows a user to subscribe for changes to specific hashes. Each subscribed hash should generate a
        notification on the UI. Furthermore, the user should be able to select in which currency the values should be displayed (USD, EUR or
        BTC).
      </Typography>
      <ul>
        <li>Framwork : React V18.2.0</li>
      </ul>
    </Stack>
  </MainCard>
);

export default DocumentationsPage;
