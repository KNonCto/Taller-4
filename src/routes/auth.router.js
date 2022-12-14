import express from "express";
import { createUser, comparePassword } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", comparePassword);

export default router;
