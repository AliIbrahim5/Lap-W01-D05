import express from "express";
import { IUser } from "./type/user.type";
const app = express();
app.use(express.json());
import { v4 as uuidv4 } from "uuid";

const PORT = 5000;

let user: IUser[] = [];

app.get("/api/user", (req, res) => {
  try {
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/user", (req, res) => {
  const newUser = req.body as IUser;
  newUser.id = uuidv4();
  user.push(newUser);
  res.json({
    message: "added user",
  });
});

app.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const updeteUser = req.body as IUser;
  const updeteUserList = user.filter((item) => {
    return item.id !== id;
  });
  updeteUserList.push(updeteUser);
  user = updeteUserList;

  res.json({
    message: "updete user",
  });
});

app.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const deleteUser = user.filter((item) => {
    return item.id !== id;
  });
  user = deleteUser;
  res.json({
    message: "delete user",
  });
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
