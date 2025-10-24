import express from "express";
import { saveItems, getItems, updateItems } from "../controller/PromoCodeController.js";

const PromoCodeRouter = express.Router();

PromoCodeRouter.post("/", saveItems)
PromoCodeRouter.get("/", getItems)
PromoCodeRouter.put("/:itemId", updateItems)

export default PromoCodeRouter;