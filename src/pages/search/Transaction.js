// material-ui

// project import
import MainCard from 'components/MainCard';
import { useParams } from 'react-router-dom';

// ==============================|| Transaction PAGE ||============================== //

const TransactionPage = () => {
  let { hash } = useParams();
  return (
    <MainCard title="Sample Card">
      <h1>Tnx page {hash} </h1>
    </MainCard>
  );
};

export default TransactionPage;
