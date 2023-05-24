// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  currency: 'BTC'
};

// ==============================|| SLICE - MENU ||============================== //

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    switchCurrency(state, action) {
      state.currency = action.payload.currency;
    }
  }
});

export default settings.reducer;

export const { switchCurrency } = settings.actions;
