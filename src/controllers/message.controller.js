import Message from "../models/message.model.js";

async function getMessage(req, res) {
  const productId = req.params.id;

  const product = await Message.findById(productId);
  return res.status(200).send({ product });
}

async function createMessage(req, res) {
  try {
    const createdMessage = await Message.create({
      userId: req.body.name,
      message: req.body.price,
    });
    return res.status(201).send({ response: createdMessage });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { getMessage, createMessage };
