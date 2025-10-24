import express from "express";
import { saveItems, getItems, updateItems } from "../controller/ReleaseNotesController.js";

const ReleaseNotesRouter = express.Router();

ReleaseNotesRouter.post("/", saveItems)
ReleaseNotesRouter.get("/", getItems)
ReleaseNotesRouter.put("/:itemId", updateItems)

export default ReleaseNotesRouter;