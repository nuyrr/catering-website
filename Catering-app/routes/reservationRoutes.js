import express from 'express';
import { createBooking, getUserBookings } from '../controllers/reservationController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createBooking);
router.get('/my-bookings', authenticate, getUserBookings);

export default router;
