// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import currency from './settings';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, currency });

export default reducers;
