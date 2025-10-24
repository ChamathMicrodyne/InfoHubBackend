import express from "express";
import { saveItems, getItems, updateItems } from "../controller/TenantConfigController.js";

const TenantConfigRouter = express.Router();

TenantConfigRouter.post("/", saveItems)
TenantConfigRouter.get("/", getItems)
TenantConfigRouter.put("/:itemId", updateItems)

export default TenantConfigRouter;