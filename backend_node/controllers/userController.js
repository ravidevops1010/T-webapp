const User = require('../models/User');

exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have middleware to get user details
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
