import express from "express";
import { saveItems, getItems, updateItems } from "../controller/JoiningController.js";

const JoiningRouter = express.Router();

JoiningRouter.post("/", saveItems)
JoiningRouter.get("/", getItems)
JoiningRouter.put("/:itemId", updateItems)

export default JoiningRouter;