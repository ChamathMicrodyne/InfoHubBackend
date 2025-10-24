import express from "express";
import { saveItems, getItems, updateItems } from "../controller/SocialMediaLinksController.js";

const SocialMediaLinksRouter = express.Router();

SocialMediaLinksRouter.post("/", saveItems)
SocialMediaLinksRouter.get("/", getItems)
SocialMediaLinksRouter.put("/:itemId", updateItems)

export default SocialMediaLinksRouter;