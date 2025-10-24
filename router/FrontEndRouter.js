import express from "express";
import { saveItems, getItems, updateItems } from "../controller/FrontEndController.js";

const FrontEndRouter = express.Router();

FrontEndRouter.post("/", saveItems)
FrontEndRouter.get("/", getItems)
FrontEndRouter.put("/:itemId", updateItems)

export default FrontEndRouter;