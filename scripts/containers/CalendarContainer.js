import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cancelBooking, checkOutBooking, deleteBooking } from '../actions/bookings';

import Calendar from '../components/Calendar';

class CalendarContainer extends Component {
    render() {
		return (
			<Calendar { ...this.props } />
		);
    }
}

function mapStateToProps(state) {
	const { bookings } = state;

	return {
		bookings: bookings
	};
}

// If you don't specify this function Redux will automatically map store.dispatch to your component.
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ cancelBooking, checkOutBooking, deleteBooking }, dispatch);
}

// May need to do mapDispatchToProps(dispatch) to pass any actions down to the Calendar component.

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
