import express from "express";
import { saveItems, getItems, updateItems } from "../controller/TestimanialsController.js";

const TestimanialsRouter = express.Router();

TestimanialsRouter.post("/", saveItems)
TestimanialsRouter.get("/", getItems)
TestimanialsRouter.put("/:itemId", updateItems)

export default TestimanialsRouter;