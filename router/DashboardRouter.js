import express from "express";
import { saveItems, getItems, updateItems } from "../controller/DashboardController.js";

const DashboardRouter = express.Router();

DashboardRouter.post("/", saveItems)
DashboardRouter.get("/", getItems)
DashboardRouter.put("/:itemId", updateItems)

export default DashboardRouter;