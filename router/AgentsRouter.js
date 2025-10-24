import express from "express";
import { saveItems, getItems, updateItems } from "../controller/AgentsController.js";

const AgentsRouter = express.Router();

AgentsRouter.post("/", saveItems)
AgentsRouter.get("/", getItems)
AgentsRouter.put("/:itemId", updateItems)

export default AgentsRouter;