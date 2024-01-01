import AWS from 'aws-sdk';
import multer from 'multer';
import express from 'express';
import multerS3 from 'multer-s3';

const config = {
  endpoint: process.env(LIARA_ENDPOINT),
  accessKeyId: process.env(LIARA_ACCESS_KEY),
  secretAccessKey: process.env(LIARA_SECRET_KEY),
  region: "default",
};

const app = express();
const s3 = new AWS.S3(config);

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env(LIARA_BUCKET_NAME),
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
});


// route
app.post('/upload', upload.single('objectKey'), function (req, res) {
  console.log(req.file);

  return res.send({
    status: 'success',
    message: 'file uploaded!',
    url: {
      size: req.file.size,
      url: req.file.location,
      name: req.file.key,
      type: req.file.mimetype,
    },
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});