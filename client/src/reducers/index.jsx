import {combineReducers} from 'redux';
import itemReducer from './itemReducer.jsx';

export default combineReducers({
    item: itemReducer
})