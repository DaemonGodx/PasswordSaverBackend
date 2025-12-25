import express from "express";
import { create, getDecrypted, getAll, update, deleteSave} from "../controllers/saveController.js";
import { checkAuth } from "../middleware/auth.js";
const saveRoute = express.Router();

saveRoute.post("/",checkAuth,create);
saveRoute.get("/",checkAuth,getAll);
saveRoute.get("/:id",checkAuth,getDecrypted);
saveRoute.put("/:id",checkAuth,update);
saveRoute.delete("/:id",checkAuth,deleteSave);

export default saveRoute;