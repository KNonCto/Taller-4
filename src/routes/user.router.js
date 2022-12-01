import express from "express";
import {
  getUsers,
  getMessagesPerUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:userId/messages/", getMessagesPerUser);

export default router;
