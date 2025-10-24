import express from "express";
import { saveItems, getItems, updateItems } from "../controller/FraudAndRisksController.js";

const FraudAndRisksRouter = express.Router();

FraudAndRisksRouter.post("/", saveItems)
FraudAndRisksRouter.get("/", getItems)
FraudAndRisksRouter.put("/:itemId", updateItems)

export default FraudAndRisksRouter;