const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['email']);
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

