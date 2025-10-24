import express from "express";
import { saveItems, getItems, updateItems } from "../controller/GameManagementController.js";

const GameManagementRouter = express.Router();

GameManagementRouter.post("/", saveItems)
GameManagementRouter.get("/", getItems)
GameManagementRouter.put("/:itemId", updateItems)

export default GameManagementRouter;