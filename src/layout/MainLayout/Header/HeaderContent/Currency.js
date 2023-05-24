// material-ui
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// project import
import { useDispatch, useSelector } from 'react-redux';
import { switchCurrency } from 'store/reducers/settings';

// ==============================|| Currency ||============================== //

export default function Currency() {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currency);
  const handleChange = (event) => {
    dispatch(switchCurrency({ currency: event.target.value }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="Currency-select-label">Currency</InputLabel>
      <Select labelId="Currency-select-label" id="Currency-select" value={currency} label="Currency" onChange={handleChange}>
        <MenuItem value="BTC">BTC</MenuItem>
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
      </Select>
    </FormControl>
  );
}
