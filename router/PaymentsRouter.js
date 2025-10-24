import express from "express";
import { saveItems, getItems, updateItems } from "../controller/PaymentsController.js";

const PaymentsRouter = express.Router();

PaymentsRouter.post("/", saveItems)
PaymentsRouter.get("/", getItems)
PaymentsRouter.put("/:itemId", updateItems)

export default PaymentsRouter;