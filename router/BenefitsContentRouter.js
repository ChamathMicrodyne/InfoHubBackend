import express from "express";
import { saveItems, getItems, updateItems } from "../controller/BenefitsContentController.js";

const BenefitsContentRouter = express.Router();

BenefitsContentRouter.post("/", saveItems)
BenefitsContentRouter.get("/", getItems)
BenefitsContentRouter.put("/:itemId", updateItems)

export default BenefitsContentRouter;