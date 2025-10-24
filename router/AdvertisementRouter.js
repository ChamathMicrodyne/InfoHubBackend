import express from "express";
import { saveItems, getItems, updateItems } from "../controller/AdvertisementController.js";

const AdvertisementRouter = express.Router();

AdvertisementRouter.post("/", saveItems)
AdvertisementRouter.get("/", getItems)
AdvertisementRouter.put("/:itemId", updateItems)

export default AdvertisementRouter;