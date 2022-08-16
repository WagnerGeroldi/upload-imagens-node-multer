import { Router } from "express";


import routerImages from "./image.routes";


const router = Router();


router.use("/images/", routerImages);



export default router;