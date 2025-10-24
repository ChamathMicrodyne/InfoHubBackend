import express from "express";
import { saveItems, getItems, updateItems } from "../controller/CashbackController.js";

const CashbackRouter = express.Router();

CashbackRouter.post("/", saveItems)
CashbackRouter.get("/", getItems)
CashbackRouter.put("/:itemId", updateItems)

export default CashbackRouter;