import express from "express";
import { saveItems, getItems, updateItems } from "../controller/OffersController.js";

const OffersRouter = express.Router();

OffersRouter.post("/", saveItems)
OffersRouter.get("/", getItems)
OffersRouter.put("/:itemId", updateItems)

export default OffersRouter;