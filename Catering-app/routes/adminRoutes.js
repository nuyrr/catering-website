import express from 'express';
import Booking from '../models/Booking.js';

import User from '../models/User.js';
import { getDashboardStats, getChartData } from '../controllers/adminController.js';

const router = express.Router();

// Get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId', 'name email');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a booking
router.delete('/booking/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET /api/admin/stats
router.get('/stats', getDashboardStats);

// GET /api/admin/chart-data
router.get('/chart-data', getChartData);

export default router;


