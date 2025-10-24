import express from "express";
import { saveItems, getItems, updateItems } from "../controller/SubAdminsController.js";

const SubAdminsRouter = express.Router();

SubAdminsRouter.post("/", saveItems)
SubAdminsRouter.get("/", getItems)
SubAdminsRouter.put("/:itemId", updateItems)

export default SubAdminsRouter;