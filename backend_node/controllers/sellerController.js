
const Seller = require('../models/Seller');

exports.getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find().select('-user');
    res.status(200).json(sellers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



exports.createSeller = async (req, res) => {
  try {
    const { name, description, photo } = req.body;
    const seller = new Seller({
      name,
      description,
      photo,
      user: req.user.id // Assuming you have middleware to get user details
    });
    await seller.save();
    res.status(201).json({ message: 'Seller created successfully', seller });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

