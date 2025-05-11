import express from 'express';
import { getAllBookings, getAllUsers, getAllFeedbacks } from '../controllers/adminController.js';
import { authenticate, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/bookings', authenticate, isAdmin, getAllBookings);
router.get('/users', authenticate, isAdmin, getAllUsers);
router.get('/feedbacks', authenticate, isAdmin, getAllFeedbacks);

export default router;
