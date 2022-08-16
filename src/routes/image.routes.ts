import { Router } from "express";
import imageController from "../controller/ImageController";
import multer from "multer";
import { storage } from "../services/MulterConfig";

let upImage = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const extImg = ["image/png", "image/jpeg", "image/jpg"].find(
      (acceptFormat) => acceptFormat === file.mimetype
    );

    extImg ? cb(null, true) : cb(null, false);
  },
});

const routerImage = Router();

routerImage.post("/upload", upImage.single("file"), imageController.create);
routerImage.get("/image/:id", imageController.find);

export default routerImage;
