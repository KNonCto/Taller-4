import express from "express";
import {
  createMessage,
  deleteMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/", createMessage);
router.delete("/:messageId", deleteMessage);

export default router;
