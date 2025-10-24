import express from "express";
import { saveItems, getItems, updateItems } from "../controller/FaqsListingController.js";

const FaqsListingRouter = express.Router();

FaqsListingRouter.post("/", saveItems)
FaqsListingRouter.get("/", getItems)
FaqsListingRouter.put("/:itemId", updateItems)

export default FaqsListingRouter;