import express from "express";
import { saveItems, getItems, updateItems } from "../controller/SportContentController.js";

const SportContentRouter = express.Router();

SportContentRouter.post("/", saveItems)
SportContentRouter.get("/", getItems)
SportContentRouter.put("/:itemId", updateItems)

export default SportContentRouter;