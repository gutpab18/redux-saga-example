import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

import CalendarDay from './CalendarDay';

import './Calendar.scss';

class Calendar extends React.Component {
	render() {
		// Group all the bookings by day
		var { bookings, cancelBooking, checkOutBooking, deleteBooking } = this.props;
		var bookingsByDay = _.groupBy(bookings, function (booking) {
			if (!booking)
				return;

			return booking.start.dayOfYear();
		});

		var bookingsJsx = _.map(bookingsByDay, function (bookings, i) {
			return (
				<CalendarDay
					key={i}
					bookings={bookings}
					cancelBooking={cancelBooking}
					checkOutBooking={checkOutBooking}
					deleteBooking={deleteBooking} />
			);
		});

		return (
				<div className="calendar">
					{bookingsJsx}
				</div>
		);
	}
}

export default Calendar;
