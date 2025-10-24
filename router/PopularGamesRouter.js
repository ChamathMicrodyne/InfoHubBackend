import express from "express";
import { saveItems, getItems, updateItems } from "../controller/PopularGamesController.js";

const PopularGamesRouter = express.Router();

PopularGamesRouter.post("/", saveItems)
PopularGamesRouter.get("/", getItems)
PopularGamesRouter.put("/:itemId", updateItems)

export default PopularGamesRouter;