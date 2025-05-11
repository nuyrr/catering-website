import express from 'express';
import { createFeedback, getUserFeedbacks } from '../controllers/feedbackController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Submit feedback (user must be logged in)
router.post('/', authenticate, createFeedback);

// Get logged-in user's feedbacks
router.get('/my-feedbacks', authenticate, getUserFeedbacks);

export default router;
