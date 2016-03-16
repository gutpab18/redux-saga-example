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
			year: '2008',
		},
		passengers: [],
		journeyToLocation: 'Gone Burger',
		returnToLocation: 'Smartrak Hamilton',
		start: moment({ hour: 8 }).toDate(),
		end: moment({ hour: 11 }).toDate(),
		status: 'APPROVED',
	},
	{
		id: 1,
		plant: {
			name: 'Dave\'s Car',
			rego: 'EQB729',
			make: 'Honda',
			model: 'Accord',
			year: '2008',
		},
		passengers: [],
		journeyToLocation: 'Jacob\'s house',
		returnToLocation: 'Smartrak Hamilton',
		start: moment({ hour: 14 }).toDate(),
		end: moment({ hour: 17 }).toDate(),
		status: 'APPROVED',
	},
	{
		id: 2,
		plant: {
			name: 'Smartrak Pool Car',
			rego: 'EQB729',
			make: 'Honda',
			model: 'Accord',
			year: '2008',
		},
		passengers: [],
		journeyToLocation: 'Party town',
		returnToLocation: 'Smartrak Hamilton',
		start: moment({ hour: 9 }).subtract('days', 1).toDate(),
		end: moment({ hour: 17 }).subtract('days', 1).toDate(),
		status: 'APPROVED',
	},
];

const API_ROOT = 'https://api.smartrak.co.nz/';

const fetch = (url) => {
	return fakeBookings;
};

const callApi = (endpoint) => {
	const fullUrl = API_ROOT + endpoint;

	// We are just pretending we are using ajax to talk to the server here.
	// TODO: when really talking to the server we can use npm package https://github.com/matthew-andrews/isomorphic-fetch
	return fetch(fullUrl);
};

// api services
// Arrow Functions (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
export const fetchBookings = () => { return callApi('bookings'); };
