import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { startBookingsPoll, stopBookingsPoll } from '../actions/bookings';

import CalendarContainer from './CalendarContainer';

class App extends Component {
	componentDidMount() {
		// When this app boots up the fetch all the bookings.
		const { dispatch } = this.props;
		dispatch(startBookingsPoll());

		// Testing the stop polling
		let stopPoll = stopBookingsPoll;
		setTimeout(function () {
			dispatch(stopPoll());
		}, 2000);
	}

	render() {
		return (
			<div>
				<CalendarContainer />
			</div>
		);
	}
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired

	// path: PropTypes.array.isRequired TODO: this is the router stuff
};

function mapStateToProps(state) {
	// Current App doesn't need any state
	return {};
}

export default connect(mapStateToProps)(App);
