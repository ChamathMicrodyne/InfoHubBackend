import express from "express";
import { saveItems, getItems, updateItems } from "../controller/SiteContentController.js";

const SiteContentRouter = express.Router();

SiteContentRouter.post("/", saveItems)
SiteContentRouter.get("/", getItems)
SiteContentRouter.put("/:itemId", updateItems)

export default SiteContentRouter;