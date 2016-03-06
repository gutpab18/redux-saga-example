import moment from 'moment';

// temp store of some boooking objects so we don't actually need to fetch them from the server
const fakeBookings = [
	{
		id: 0,
		plant: {
			name: 'Smartrak Pool Car',
			rego: 'EQB729',
			make: 'Honda',
			model: 'Accord',
			year: '2008'
		},
		passengers: [],
		journeyToLocation: 'Gone Burger',
		returnToLocation: 'Smartrak Hamilton',
		start: moment(),
		end: moment().add(2, 'h'),
		status: 'APPROVED'
	},
	{
		id: 1,
		plant: {
			name: 'Dave\'s Car',
			rego: 'EQB729',
			make: 'Honda',
			model: 'Accord',
			year: '2008'
		},
		passengers: [],
		journeyToLocation: 'Jacob\'s house',
		returnToLocation: 'Smartrak Hamilton',
		start: moment().add(3, 'h'),
		end: moment().add(4, 'h'),
		status: 'APPROVED'
	},
	{
		id: 2,
		plant: {
			name: 'Smartrak Pool Car',
			rego: 'EQB729',
			make: 'Honda',
			model: 'Accord',
			year: '2008'
		},
		passengers: [],
		journeyToLocation: 'Party town',
		returnToLocation: 'Smartrak Hamilton',
		start: moment().add(2, 'd'),
		end: moment().add(2, 'd').add(3, 'h'),
		status: 'APPROVED'
	}
];

const API_ROOT = 'https://api.smartrak.co.nz/';

function fetch(url) {
	return fakeBookings;
}

function callApi(endpoint) {
	const fullUrl =  API_ROOT + endpoint;

	// We are just pretending we are using ajax to talk to the server here.
	// TODO: when really talking to the server we can use npm package https://github.com/matthew-andrews/isomorphic-fetch
	return fetch(fullUrl);
}

// api services
// Arrow Functions (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
export const fetchBookings = () => callApi('bookings');
