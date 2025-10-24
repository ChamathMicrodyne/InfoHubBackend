import express from "express";
import { saveItems, getItems, updateItems } from "../controller/SystemLogsController.js";

const SystemLogsRouter = express.Router();

SystemLogsRouter.post("/", saveItems)
SystemLogsRouter.get("/", getItems)
SystemLogsRouter.put("/:itemId", updateItems)

export default SystemLogsRouter;