import express from "express";
import { saveItems, getItems, updateItems } from "../controller/CustomPageController.js";

const CustomPageRouter = express.Router();

CustomPageRouter.post("/", saveItems)
CustomPageRouter.get("/", getItems)
CustomPageRouter.put("/:itemId", updateItems)

export default CustomPageRouter;