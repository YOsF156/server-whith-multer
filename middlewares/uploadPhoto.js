const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("file",file);
    cb(null, `${Math.random()*21212}-${file.originalname}`);
  },
});

const uploadImage = multer({ storage });
module.exports = {uploadImage}












// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//       let fileName = `${Date.now()}-${file.originalname}`;
//       cb(null, fileName);
//     },
//   });

// const uploadImage = multer({ storage: storage});
// module.exports = { uploadImage };
