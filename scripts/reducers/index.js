import { combineReducers } from 'redux';
import bookings from '../reducers/bookings';

const rootReducer = combineReducers({
	bookings,
});

export default rootReducer;
