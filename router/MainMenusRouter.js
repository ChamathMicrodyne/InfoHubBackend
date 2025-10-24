import express from "express";
import { saveItems, getItems, updateItems } from "../controller/MainMenusController.js";

const MainMenusRouter = express.Router();

MainMenusRouter.post("/", saveItems)
MainMenusRouter.get("/", getItems)
MainMenusRouter.put("/:itemId", updateItems)

export default MainMenusRouter;