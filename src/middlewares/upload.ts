import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: '../static/',
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, fileExtension);
  },
});

export const upload = multer({ storage }).single("image");
