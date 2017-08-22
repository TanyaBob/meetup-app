import { createStore, combineReducers } from 'redux';
import { meetupsReducer } from './reducers/reducer'

const reducer = combineReducers({
    meetups: meetupsReducer
});

export default createStore(reducer);
