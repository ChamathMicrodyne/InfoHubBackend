import express from "express";
import { saveItems, getItems, updateItems } from "../controller/SeoManagementController.js";

const SeoManagementRouter = express.Router();

SeoManagementRouter.post("/", saveItems)
SeoManagementRouter.get("/", getItems)
SeoManagementRouter.put("/:itemId", updateItems)

export default SeoManagementRouter;