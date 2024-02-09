exports.uploadPhoto = async (req, res) => {
  try {
    // Handle file upload logic using multer
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

