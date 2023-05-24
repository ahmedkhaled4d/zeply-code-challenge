// material-ui
import { LinearProgress, Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import OverViewCard from 'components/cards/OverViewCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosChainApi from 'utils/axios/api';

// ==============================|| Address PAGE ||============================== //

import AccordionCard from 'components/cards/AccordionCard';

export default function AddressPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axiosChainApi
      .get(`/rawaddr/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <MainCard title={`# ${id}`}>
      {loading && <LinearProgress />}
      {data.address && (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          {/* row 1 */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <OverViewCard
              color="success"
              title="Balance"
              count={`${data.final_balance / 100000000} BTC`}
              percentage={Number(data.total_received / data.total_sent).toFixed(2)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <OverViewCard title="Total number of transactions" count={data.n_tx} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <OverViewCard title="Received" count={`${data.total_received / 100000000} BTC`} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <OverViewCard title="Sent" count={`${data.total_sent / 100000000} BTC`} />
          </Grid>

          {data.txs.map((row, index) => (
            <Grid key={index} item xs={12}>
              <AccordionCard
                balance={row.balance}
                time={row.time}
                hash={row.hash}
                fee={row.fee}
                weight={row.weight}
                inputs={row.inputs}
                out={row.out}
                result={row.result}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </MainCard>
  );
}
