// material-ui
import { Typography, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DocumentationsPage PAGE ||============================== //

const DocumentationsPage = () => (
  <MainCard>
    <Stack spacing={2}>
      <Typography variant="body2">Tools and framwork which i used</Typography>
      <ul>
        <li>Framwork : React V18.2.0</li>
        <li>MUI</li>
        <li>Websocket</li>
      </ul>
    </Stack>
  </MainCard>
);

export default DocumentationsPage;
