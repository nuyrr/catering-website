import Booking from '../models/Reservation.js';

// Create a new booking (reservation)
export const createBooking = async (req, res) => {
  try {
    const {
      fullName,
      email,
      eventDate,
      time,
      numberOfGuests,
      notes
    } = req.body;

    const newBooking = new Booking({
      user: req.user._id,
      fullName,
      email,
      eventDate,
      time,
      numberOfGuests,
      notes
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

// Get bookings for the logged-in user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ eventDate: 1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
