import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cardSelectedReducer from './cardSelectedReducer';
import roomSelectedReducer from './roomSelectedReducer';

const globalReducer = combineReducers({
    roomSelectedReducer: roomSelectedReducer,
    userReducer: userReducer,
    cardSelectedReducer: cardSelectedReducer,
});

export default globalReducer;