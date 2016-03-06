import React, {Component, PropTypes} from 'react';
import './BookingCalendarEntry.scss';

export default class BookingCalendarEntry extends Component {
	constructor(props) {
		super(props);
		this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
		this.handleCancelClicked = this.handleCancelClicked.bind(this);
		this.handleDeleteClicked = this.handleDeleteClicked.bind(this);
	}

	handleCheckOutClick() {
		const { booking, checkOutBooking } = this.props;
		checkOutBooking(booking.id);
	}

	handleCancelClicked() {
		const { booking, cancelBooking } = this.props;
		cancelBooking(booking.id);
	}

	handleDeleteClicked() {
		const { booking, deleteBooking } = this.props;
		deleteBooking(booking.id);
	}

	bookingStatusToClass(status) {
		switch (status) {
			case 'CHECKED_OUT':
				return 'checked-out';
			case 'CANCELLED':
				return 'cancelled';
		}

		return '';
	}

	render() {
		const { booking } = this.props;

		return (
			<div className={`booking-calendar-entry ${this.bookingStatusToClass(booking.status)}`}>
				<h1>{booking.plant.name}</h1>
				<div>{booking.start.format('HH:mm a')} - {booking.end.format('HH:mm a')} to {booking.journeyToLocation}</div>
				<button onClick={this.handleCheckOutClick}>Check out</button>
				<button onClick={this.handleCancelClicked}>Cancel</button>
				<button onClick={this.handleDeleteClicked}>Delete</button>
			</div>
		);
	}
}

BookingCalendarEntry.propTypes = {
	booking: PropTypes.object.isRequired,
	cancelBooking: PropTypes.func.isRequired
};
