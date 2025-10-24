import express from "express";
import { saveItems, getItems, updateItems } from "../controller/BannersController.js";

const BannersRouter = express.Router();

BannersRouter.post("/", saveItems)
BannersRouter.get("/", getItems)
BannersRouter.put("/:itemId", updateItems)

export default BannersRouter;