// material-ui
import { LinearProgress, Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosChainApi from 'utils/axios/api';
import { useSelector } from 'react-redux';
import AccordionCard from 'components/cards/AccordionCard';

// ==============================|| Transaction  PAGE ||============================== //

export default function TransactionPage() {
  const { currency } = useSelector((state) => state.currency);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  let { hash } = useParams();

  useEffect(() => {
    setLoading(true);
    axiosChainApi
      .get(`/rawtx/${hash}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [hash]);

  return (
    <MainCard title={`# ${hash}`}>
      {loading && <LinearProgress />}
      {data.hash && (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          {/* row 1 */}
          <Grid item xs={12}>
            <AccordionCard
              currency={currency}
              time={data.time}
              hash={data.hash}
              fee={data.fee}
              weight={data.weight}
              inputs={data.inputs}
              out={data.out}
            />
          </Grid>
        </Grid>
      )}
    </MainCard>
  );
}
