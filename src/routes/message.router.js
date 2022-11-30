import express from "express";
import {
  createMessage,
  getMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/messages/", createMessage);
router.get("/users/:userId/messages/", getMessage);

export default router;
