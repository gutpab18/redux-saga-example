import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { startBookingsPoll, stopBookingsPoll } from '../actions/bookings';

import CalendarContainer from './CalendarContainer';

class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		// path: PropTypes.array.isRequired TODO: this is the router stuff
	}

	componentDidMount() {
		// When this app boots up the fetch all the bookings.
		const { dispatch } = this.props;
		dispatch(startBookingsPoll());

		// Testing the stop polling
		const stopPoll = stopBookingsPoll;
		setTimeout(() => {
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

const mapStateToProps = () => {
	// Current App doesn't need any state
	return {};
};

export default connect(mapStateToProps)(App);
