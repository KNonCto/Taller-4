import User from "../models/user.model.js";
import bcrypt from "bcrypt";

async function createUser(req, res) {
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
    return res.status(500).send({ success: false, error });
  }
}

async function comparePassword(req, res) {
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
    const user = await User.find({ email: req.body.email });
    const password = req.body.password;
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (isMatch) {
      return res.status(200).send({ logged: true });
    } else if (!isMatch) {
      return res.status(200).send({ logged: false });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { createUser, comparePassword };
