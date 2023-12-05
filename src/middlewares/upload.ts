import multer from 'multer';

const Storage = multer.diskStorage({
  destination: 'static',
  filename: (req, file, cb) => {
    // Assuming you have a 'name' field in the request body
    const imageName = req.body.name || 'defaultName'; // Provide a default name if 'name' is not available
    const filename = `${imageName}.jpg`;

    cb(null, filename);
  }
});

export const upload = multer({
  storage: Storage
}).single('image');
