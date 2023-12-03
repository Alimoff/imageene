import multer from 'multer';

const Storage = multer.diskStorage({
  destination:'static',
  filename:(req,file,cb) =>{
      cb(null,file.originalname);
  }
});

export const upload = multer({
  storage:Storage
}).single('image');