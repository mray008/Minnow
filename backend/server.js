// minnow/backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { users } from "./users.js"; // <-- must include .js extension in ESM

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST /login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    username: user.username,
    role: user.role,
    token: "fake-jwt-token", // placeholder for real JWT later
  });
});

// Dynamic port for Render or localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));