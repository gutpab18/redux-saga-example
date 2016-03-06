import {
  START_POLL_BOOKINGS,
  STOP_POLL_BOOKINGS,
  FETCHED_BOOKINGS,
  CANCEL_BOOKING,
  CHECK_OUT_BOOKING,
  DELETE_BOOKING
} from '../constants';

export function startBookingsPoll() {
	return {
		type: START_POLL_BOOKINGS
	};
}

export function stopBookingsPoll() {
	return {
		type: STOP_POLL_BOOKINGS
	};
}

export function receivedBookings(bookings) {
	return {
		type: FETCHED_BOOKINGS,
		bookings: bookings
	};
}

export function cancelBooking(id) {
	return {
		type: CANCEL_BOOKING,
		id: id
	};
}

export function checkOutBooking(id) {
	return {
		type: CHECK_OUT_BOOKING,
		id: id
	};
}

export function deleteBooking(id) {
	return {
		type: DELETE_BOOKING,
		id: id
	};
}
