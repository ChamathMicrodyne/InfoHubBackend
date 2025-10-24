import express from "express";
import { saveItems, getItems, updateItems } from "../controller/NavBarController.js";

const NavBarRouter = express.Router();

NavBarRouter.post("/", saveItems)
NavBarRouter.get("/", getItems)
NavBarRouter.put("/:itemId", updateItems)

export default NavBarRouter;