import _ from 'lodash';
import update from 'react-addons-update';
import {
  FETCHED_BOOKINGS,
  CANCEL_BOOKING,
  CHECK_OUT_BOOKING,
  DELETE_BOOKING
} from '../constants';

// TODO: this shouldn't be an array.
const initialState = [];

function receivedBookings(state = initialState, action) {
	if (action.bookings) {
		return _.union(state, action.bookings);
	}

	return state;
}

// ... is Array spread operator which expands the expression.
// E.g
// const a = [1, 2, 3];
// const b = [...a, 4, 5];
// b => [1, 2, 3, 4, 5]
function removeBooking(bookings, id) {
	const index = _.findIndex(bookings, { id: id });

	return [
		...bookings.slice(0, index),
		...bookings.slice(index + 1)
	];
}

function updateStatus(bookings, id, status) {
	const index = _.findIndex(bookings, { id: id });

	return update(bookings, {
		[index]: {
			status: { $set: status }
		}
	});
}

function checkOut(bookings, id) {
	return updateStatus(bookings, id, 'CHECKED_OUT');
}

function cancel(bookings, id) {
	return updateStatus(bookings, id, 'CANCELLED');
}

export default function bookings(state = initialState, action) {
	switch (action.type) {
		case FETCHED_BOOKINGS:
			return receivedBookings(state, action);
		case CANCEL_BOOKING:
			return cancel(state, action.id);
		case CHECK_OUT_BOOKING:
			return checkOut(state, action.id);
		case DELETE_BOOKING:
			return removeBooking(state, action.id);
		default:
			return state;
	}
}
