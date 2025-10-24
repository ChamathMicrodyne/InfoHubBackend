import express from "express";
import { saveItems, getItems, updateItems } from "../controller/PromotionVideosController.js";

const PromotionVideosRouter = express.Router();

PromotionVideosRouter.post("/", saveItems)
PromotionVideosRouter.get("/", getItems)
PromotionVideosRouter.put("/:itemId", updateItems)

export default PromotionVideosRouter;