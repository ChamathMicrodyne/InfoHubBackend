import express from 'express';
import { createUsers, loginUser } from '../controller/UserController.js';

const userRouter = express.Router();

// userRouter.post("/signup", createUsers)
userRouter.post("/login", loginUser)

export default userRouter;