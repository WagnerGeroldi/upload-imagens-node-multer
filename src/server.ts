import express, { NextFunction, Response, Request } from "express";
import { db } from "./database";
import router from "./routes";
import bodyparser from "body-parser";
import cors from "cors";

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-PINGOTHER"
  );
  app.use(cors());
  next();
});

app.use("/files/", express.static("./src/temp/"));
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3333, async () => {
  await db.sync();
  console.log(`Server rodando na porta 3333`);
});

export default app;
