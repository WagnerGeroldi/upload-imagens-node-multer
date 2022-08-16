import multer from "multer";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/temp/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime()+"_"+file.originalname);
  },
});
