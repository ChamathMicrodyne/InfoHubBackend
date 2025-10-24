import express from "express";
import { saveItems, getItems, updateItems } from "../controller/PlayerController.js";

const PlayerRouter = express.Router();

PlayerRouter.post("/", saveItems)
PlayerRouter.get("/", getItems)
PlayerRouter.put("/:itemId", updateItems)

export default PlayerRouter;