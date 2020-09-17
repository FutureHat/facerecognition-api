import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";
import { handleRegister } from "./controllers/register.js";
import { handleSignup } from "./controllers/signup.js";
import { handleProfile } from "./controllers/profile.js";
import { handleImage, handleApi } from "./controllers/image.js";
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "smile",
    database: "smart_brain",
  },
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", handleSignup(db, bcrypt));

app.post("/register", handleRegister(db, bcrypt));

app.get("/profile/:id", handleProfile(db));

app.put("/image", handleImage(db));
app.post("/imageurl", handleApi);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

