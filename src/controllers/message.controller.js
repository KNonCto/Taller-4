import Message from "../models/message.model.js";

async function createMessage(req, res) {
  const data = Object.keys(req.body);
  const data2 = Object.values(req.body);

  const errorData = [];

  data2.forEach((element, i) => {
    if (element.length === 0) {
      errorData.push(data[i]);
    }
  });

  if (errorData.length > 0) {
    return res
      .status(400)
      .send({ success: false, error: `faltan los campos: ${errorData}` });
  }
  try {
    const createdMessage = await Message.create({
      userId: req.body.userId,
      message: req.body.message,
    });
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
}

async function deleteMessage(req, res) {
  const messageId = req.params.messageId;

  await Message.findByIdAndDelete(messageId);
  return res.status(204).send();
}

export { createMessage, deleteMessage };
