// take = waits for an action to occur (suspends the generator). Not quite sure where you would use this?
// put = distpatches an action like { type: 'FETCHING_BOOKINGS' } to the store
// call = create an Effect that instructs redux-saga middleware to call(the function)
// fork = the same as call but is non-blocking (i.e. the generator will continue once the fn is invoked)
import { take, put, call, fork, cancel } from 'redux-saga/effects';
import { SagaCancellationException } from 'redux-saga';

import * as actions from '../actions/bookings';
import { START_POLL_BOOKINGS, STOP_POLL_BOOKINGS } from '../constants';
import * as api from '../services/api';

// Helper function that provides ability to delay for x milliseconds.
// Like: http://bluebirdjs.com/docs/api/promise.delay.html
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* pollBookings() {
	try {
		while (true) {
			console.log('Polled.');

			const bookings = yield call(api.fetchBookings);
			yield put(actions.receivedBookings(bookings));

			yield call(delay, 10 * 100);
		}
	} catch (error) {
		if (error instanceof SagaCancellationException) {
			console.log('Poll cancelled.');
		}
	}
}

let pollPromise;

function* startBookingsPoll() {
	while (yield take(START_POLL_BOOKINGS)) {
		console.log('Poll started.');

		pollPromise = yield fork(pollBookings);
	}
}

function* stopBookingsPoll() {
	while (yield take(STOP_POLL_BOOKINGS)) {
		console.log('Stopping poll.');

		yield cancel(pollPromise);
	}
}

// Export generator functions that are executed as soon as the store is ready
export default function* root() {
	yield [
		fork(startBookingsPoll),
		fork(stopBookingsPoll),
	];
}
