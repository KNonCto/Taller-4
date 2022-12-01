import User from "../models/user.model.js";
import Message from "../models/message.model.js";

async function getUsers(req, res) {
  try {
    const users = await User.find();
    return res.status(200).send({ users });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function getMessagesPerUser(req, res) {
  try {
    const messages = await Message.find({
      userId: req.params.userId,
    }).populate("userId");
    console.log(messages);
    return res.status(200).send({ messages });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { getUsers, getMessagesPerUser };
