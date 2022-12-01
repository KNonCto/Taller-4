import express from "express";
import userRouter from "./src/routes/user.router.js";
import messageRouter from "./src/routes/message.router.js";
import authRouter from "./src/routes/auth.router.js";
import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";

const app = express();

app.use(express.json());

app.use("/messages", messageRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", function (req, res) {
  res.send({ student: "Daniel Parra" });
});

async function startSever() {
  const isConnected = await connectDB();
  if (isConnected) {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  } else {
    process.exit();
  }
}

startSever();
