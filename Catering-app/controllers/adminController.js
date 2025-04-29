import Booking from '../models/Booking.js';
import User from '../models/User.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const totalUsers = await User.countDocuments();
    
    const bookings = await Booking.find();
    const totalRevenue = bookings.reduce((acc, booking) => acc + (booking.price || 0), 0);

    res.status(200).json({
      totalBookings,
      totalUsers,
      totalRevenue,
      averageIncome: totalRevenue / (bookings.length || 1)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Optional dummy chart data
export const getChartData = (req, res) => {
  const marketData = [
    { name: 'Jan', sales: 2400, profit: 1400 },
    { name: 'Feb', sales: 1398, profit: 980 },
    { name: 'Mar', sales: 9800, profit: 3908 },
    { name: 'Apr', sales: 3908, profit: 4800 },
    { name: 'May', sales: 4800, profit: 3800 },
    { name: 'Jun', sales: 3800, profit: 4300 },
  ];

  const salesData = [
    { name: 'Week 1', amount: 300 },
    { name: 'Week 2', amount: 500 },
    { name: 'Week 3', amount: 700 },
    { name: 'Week 4', amount: 600 },
  ];

  res.json({ marketData, salesData });
};
