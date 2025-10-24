import express from "express";
import { saveItems, getItems, updateItems } from "../controller/WebsiteContentController.js";

const WebsiteContentRouter = express.Router();

WebsiteContentRouter.post("/", saveItems)
WebsiteContentRouter.get("/", getItems)
WebsiteContentRouter.put("/:itemId", updateItems)

export default WebsiteContentRouter;