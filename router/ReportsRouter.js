import express from "express";
import { saveItems, getItems, updateItems } from "../controller/ReportsController.js";

const ReportsRouter = express.Router();

ReportsRouter.post("/", saveItems)
ReportsRouter.get("/", getItems)
ReportsRouter.put("/:itemId", updateItems)

export default ReportsRouter;