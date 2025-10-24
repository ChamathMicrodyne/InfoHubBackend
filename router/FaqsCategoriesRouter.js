import express from "express";
import { saveItems, getItems, updateItems } from "../controller/FaqsCategoriesController.js";

const FaqsCategoriesRouter = express.Router();

FaqsCategoriesRouter.post("/", saveItems)
FaqsCategoriesRouter.get("/", getItems)
FaqsCategoriesRouter.put("/:itemId", updateItems)

export default FaqsCategoriesRouter;