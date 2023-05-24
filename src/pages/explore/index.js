// material-ui
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
// project import
import React, { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import SubscribePanel from './SubscribePanel';
import MainCard from 'components/MainCard';
import SubscribedCard from 'components/cards/SubscribedCard';
import { useSelector } from 'react-redux';
// ==============================|| DASHBOARD - DEFAULT ||============================== //
const socketUrl = 'wss://ws.blockchain.info/inv';

const DashboardExplorer = () => {
  //Public API that will echo messages sent to it back to the client
  const [messageHistory, setMessageHistory] = useState([]);
  const { currency } = useSelector((state) => state.currency);

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () =>
      sendJsonMessage({
        op: 'ping_tx'
      }),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: () => true
  });

  useEffect(() => {
    if (lastMessage !== null) {
      let messgae = JSON.parse(lastMessage.data);
      if (messgae.op === 'utx') {
        setMessageHistory((prev) => [messgae, ...prev]);
      }
    }
  }, [lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting 🔴',
    [ReadyState.OPEN]: 'Open 🟢',
    [ReadyState.CLOSING]: 'Closing 🔵',
    [ReadyState.CLOSED]: 'Closed ⛔️',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated'
  }[readyState];

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 Counters */}
      <Grid item xs={12} md={8} lg={9}>
        <div>
          <span>Subscribing to blockchain is currently {connectionStatus} .. </span>
          <List>
            {messageHistory.length > 0 &&
              messageHistory.map((message, id) => <SubscribedCard key={id} currency={currency} data={message.x} />)}
          </List>
        </div>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Number of Transactions fetched from websoket" />
              <Typography variant="h5">{messageHistory.length}</Typography>
            </ListItemButton>
          </List>
          <SubscribePanel />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardExplorer;
