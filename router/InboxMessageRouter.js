import express from "express";
import { saveItems, getItems, updateItems } from "../controller/InboxMessageController.js";

const InboxMessageRouter = express.Router();

InboxMessageRouter.post("/", saveItems)
InboxMessageRouter.get("/", getItems)
InboxMessageRouter.put("/:itemId", updateItems)

export default InboxMessageRouter;