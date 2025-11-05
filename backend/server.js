import express from "express";
import cors from "cors";
import { users } from "./users.js";

const app = express();
app.use(cors()); // allow requests from frontend
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ username: user.username, role: user.role });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));