import multer from 'multer';

const storage = (destination:any) => multer.diskStorage({
  destination:destination,
  filename: (req,file,cb) =>{
    const imgName = req.body.name
    return cb(null, imgName)
  }
})

export const fileUpload  = (destination:any) =>multer({
 storage:storage(destination),
 limits:{
  fileSize:2*1024*1024,
 },
 fileFilter:(req,file,cb) =>{
  if(file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/heic"){
    cb(null,true);
  }else{
    cb(null,false);
    return cb(new Error("Only .png, .jpeg, .jpg, .heic formats allowed!"));
  }
 }
}).single('image');




// const Storage = multer.diskStorage({
//   destination: 'static',
//   filename: (req, file, cb) => {
//     // Assuming you have a 'name' field in the request body
//     const imageName = req.body.name || 'defaultName'; // Provide a default name if 'name' is not available
//     const filename = `${imageName}.jpg`;

//     cb(null, filename);
//   }
// });

// export const upload = multer({
//   storage: Storage
// }).single('image');
