import express from "express";
import { saveItems, getItems, updateItems } from "../controller/CmsController.js";

const CmsRouter = express.Router();

CmsRouter.post("/", saveItems)
CmsRouter.get("/", getItems)
CmsRouter.put("/:itemId", updateItems)

export default CmsRouter;