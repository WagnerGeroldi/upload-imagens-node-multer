import { Request, Response } from "express";
import { ImageModel } from "../database/model/ImageModel";
import { v4 as uuidV4 } from "uuid";
import fs from "fs";

class ImageController {
  async create(req: Request, res: Response) {
    const file: any = req.file;

    if (file) {
      const fileContent = base64_encode(file.filename);

      const id = uuidV4();

      await ImageModel.create({
        id: id,
        fileName: file.filename,
        fileExtension: file.mimetype,
        filePath: file.path,
        file: fileContent,
      });

      const image: any = await ImageModel.findOne({
        where: {
          id: id,
        },
      });

      fs.unlink(`./src/temp/${file.filename}`, (err) => {
        if (err) {
          console.log(err);
        }
      });

      res.status(200).json({ image, message: "Upload Realizado com sucesso" });
    } else {
      res.status(400).json({ message: "Erro ao carregar a imagem" });
    }
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;

    const image: any = await ImageModel.findOne({
      where: {
        id: id,
      },
    });

    return res.status(200).json(image);
  }
}

//Convertendo arquivo em binário
function base64_encode(filename: any) {
  var bitmap = fs.readFileSync("src/temp/" + filename + "");
  return Buffer.from(bitmap).toString("base64");
}

export default new ImageController();
