import { Sequelize } from "sequelize";

const db = new Sequelize("banco_images", "root", "1234567", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

export { db };
