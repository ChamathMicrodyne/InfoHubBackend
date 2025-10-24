import express from "express";
import { saveItems, getItems, updateItems } from "../controller/TransactionsController.js";

const TransactionsRouter = express.Router();

TransactionsRouter.post("/", saveItems)
TransactionsRouter.get("/", getItems)
TransactionsRouter.put("/:itemId", updateItems)

export default TransactionsRouter;