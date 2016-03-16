import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import moment from 'moment';

import CalendarDay from './CalendarDay';

import './Calendar.scss';

export default class Calendar extends Component {
	static propTypes = {
		bookings: PropTypes.array,
		cancelBooking: PropTypes.func.isRequired,
		checkOutBooking: PropTypes.func.isRequired,
		deleteBooking: PropTypes.func.isRequired,
	}

	render() {
		// Group all the bookings by day
		const { bookings, cancelBooking, checkOutBooking, deleteBooking } = this.props;
		const bookingsByDay = _.groupBy(bookings, (booking) => {
			// TODO: why is this needed?
			if (!booking) {
				return false;
			}

			return moment(booking.start).dayOfYear();
		});

		const bookingsJsx = _.map(bookingsByDay, (dayBookings, i) => {
			return (
				<CalendarDay
					key={i}
					bookings={dayBookings}
					cancelBooking={cancelBooking}
					checkOutBooking={checkOutBooking}
					deleteBooking={deleteBooking}
				/>
			);
		});

		return (
			<div className="calendar">
				{bookingsJsx}
			</div>
		);
	}
}
