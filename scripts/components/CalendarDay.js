import React from 'react';
import moment from 'moment';
import BookingCalendarEntry from './BookingCalendarEntry.js';
import './CalendarDay.scss';

export default class CalendarDay extends React.Component {
	render() {
		var { bookings, cancelBooking, checkOutBooking, deleteBooking } = this.props;
		var bookingsJsx = bookings.map(function (booking, i) {
			return (
				<BookingCalendarEntry
					key={i}
					booking={booking}
					cancelBooking={cancelBooking}
					checkOutBooking={checkOutBooking}
					deleteBooking={deleteBooking} />
			);
		});

		var firstBooking = bookings.length > 0 ? bookings[0] : null;
		var calendarDayClasses = 'calendar-day';
		var jsx;

		if (firstBooking) {
			var date = firstBooking.start.date();
			var dayOfWeek = firstBooking.start.format('ddd');

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
