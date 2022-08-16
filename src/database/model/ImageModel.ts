import { DataTypes } from "sequelize";
import { db } from "../index";

const ImageModel = db.define("teste_image", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },

  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Este campo não pode ser vazio!",
      },
    },
  },

  fileExtension: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Este campo não pode ser vazio!",
      },
    },
  },

  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Este campo não pode ser vazio!",
      },
    },
  },

  file: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Este campo não pode ser vazio!",
      },
    },
  },
});

export { ImageModel };
