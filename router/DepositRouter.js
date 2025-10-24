import express from "express";
import { saveItems, getItems, updateItems } from "../controller/DepositController.js";

const DepositRouter = express.Router();

DepositRouter.post("/", saveItems)
DepositRouter.get("/", getItems)
DepositRouter.put("/:itemId", updateItems)

export default DepositRouter;