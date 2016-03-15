import test from 'ava';
import { actionTest } from 'redux-ava';

import * as Actions from '../../scripts/actions/bookings';

import {
  START_POLL_BOOKINGS,
  STOP_POLL_BOOKINGS,
  FETCHED_BOOKINGS,
  CANCEL_BOOKING,
  CHECK_OUT_BOOKING,
  DELETE_BOOKING,
} from '../../scripts/constants';

const bookings = [{
	id: 0,
	plant: {
		name: 'Smartrak Pool Car',
		rego: 'EQB729',
		make: 'Honda',
		model: 'Accord',
		year: '2008',
	},
	passengers: [],
	journeyToLocation: 'Gone Burger',
	returnToLocation: 'Smartrak Hamilton',
	start: new Date(2016, 3, 15, 9, 0, 0),
	end: new Date(2016, 3, 15, 11, 0, 0),
	status: 'APPROVED',
}];
const testBookingId = bookings[0].id;

test('startBookingsPoll action', actionTest(Actions.startBookingsPoll, {
	type: START_POLL_BOOKINGS,
}));

test('stopBookingsPoll action', actionTest(Actions.stopBookingsPoll, {
	type: STOP_POLL_BOOKINGS,
}));

test('receivedBookings action', actionTest(Actions.receivedBookings.bind(null, bookings), {
	type: FETCHED_BOOKINGS,
	bookings,
}));

test('cancelBooking action', actionTest(Actions.cancelBooking.bind(null, testBookingId), {
	type: CANCEL_BOOKING,
	id: testBookingId,
}));

test('checkOutBooking action', actionTest(Actions.checkOutBooking.bind(null, testBookingId), {
	type: CHECK_OUT_BOOKING,
	id: testBookingId,
}));

test('deleteBooking action', actionTest(Actions.deleteBooking.bind(null, testBookingId), {
	type: DELETE_BOOKING,
	id: testBookingId,
}));
