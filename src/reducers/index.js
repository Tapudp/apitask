import { combineReducer, combineReducers } from 'redux';
import DataReducer from './reducer_data';

const rootReducer = combineReducers({
    datas: DataReducer
});

export default rootReducer;