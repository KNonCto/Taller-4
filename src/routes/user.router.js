import express from "express";
import { getUsers, createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/auth/register", createUser);

export default router;
