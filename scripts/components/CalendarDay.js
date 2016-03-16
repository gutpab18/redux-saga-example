import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import BookingCalendarEntry from './BookingCalendarEntry.js';
import './CalendarDay.scss';

export default class CalendarDay extends Component {
	static propTypes = {
		bookings: PropTypes.array,
		cancelBooking: PropTypes.func.isRequired,
		checkOutBooking: PropTypes.func.isRequired,
		deleteBooking: PropTypes.func.isRequired,
	}

	render() {
		const { bookings, cancelBooking, checkOutBooking, deleteBooking } = this.props;
		const bookingsJsx = bookings.map((booking, i) => {
			return (
				<BookingCalendarEntry
					key={i}
					booking={booking}
					cancelBooking={cancelBooking}
					checkOutBooking={checkOutBooking}
					deleteBooking={deleteBooking}
				/>
			);
		});

		const firstBooking = bookings.length > 0 ? bookings[0] : null;
		let calendarDayClasses = 'calendar-day';
		let jsx;

		if (firstBooking) {
			const startDate = moment(firstBooking.start);
			const date = startDate.date();
			const dayOfWeek = startDate.format('ddd');

			if (date === moment().date()) {
				calendarDayClasses += ' current-day';
			}

			jsx = (
				<div className={calendarDayClasses}>
					<div className="cd-left-content">
						<h2>{date}</h2>
						<h3>{dayOfWeek}</h3>
					</div>
					<div className="cd-right-content">
						<div className="today-circle"></div>
						{bookingsJsx}
					</div>
				</div>
			);
		}

		return jsx;
	}
}
