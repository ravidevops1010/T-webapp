const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const config = require('../config/config');

// Configure AWS
AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region
});

const s3 = new AWS.S3();

exports.uploadPhoto = async (req, res) => {
  const { file } = req;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const fileStream = fs.createReadStream(file.path);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });

  const uploadParams = {
    Bucket: config.aws.bucketName,
    Body: fileStream,
    Key: `${Date.now()}_${path.basename(file.originalname)}`
  };

  s3.upload(uploadParams, function(err, data) {
    if (err) {
      console.log('Error', err);
      return res.status(500).json({ message: 'Error uploading file' });
    }
    if (data) {
      console.log('Upload Success', data.Location);
      // You can save the file URL (data.Location) to your database here
      return res.status(200).json({ message: 'File uploaded successfully', imageUrl: data.Location });
    }
  });
};
