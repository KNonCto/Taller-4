import User from "../models/user.model.js";
import bcrypt from "bcrypt";

async function getUsers(req, res) {
  const productId = req.params.id;

  const product = await User.findById(productId);
  return res.status(200).send({ product });
}

async function createUser(req, res) {
  try {
    const pass = req.body.password;
    const encryptedPass = bcrypt.hashSync(pass, 10);

    const createdUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      dni: req.body.dni,
      password: encryptedPass,
    });
    return res.status(201).send({ success: true });
  } catch (error) {
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

    return res.status(500).send({ success: false, error });
  }
}

export { getUsers, createUser };
