import express from "express";
import cors from "cors";
import connection from "./database/database.js"; //AI added.
import { users } from "./users.js";

const app = express();
app.use(cors()); // allow requests from frontend
app.use(express.json());

app.post("/login", (req, res) => {
  connection.execute(
  "select * from users where username=? and password=?",
    [
      req.body.username,
      req.body.password,
    ],
    function (err, result) {
      if (err) {
        console.log("Error");
        res.send(err);
      } else {
        if (result.length == 1) {
          // console.log("Result");
          res.json({
            status: 200,
            message: "User logged in successfully!",
            data: result,
            username: result[0].username,
            role: result[0].role,
          });
        }
        else {
          res.status(403).json({
            status: 403,
            message: "Password is not correct or no records match.",
          });
        }
      }
    }
  );
});

app.post("/register", (req, res) => {
  connection.execute(
    "select * from user_information where username=?",
    [
      req.body.username,
    ],
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        if (result.length == 0) {
          connection.execute(
            "insert into user_information (username,password,role) values (?,?,?)",
            [
              req.body.username,
              req.body.password,
              "student",
            ],
            function (err, result) {
              if (err) {
                res.send(err);
              } else {
                res.json({
                  status: 200,
                  message: "User created successfully",
                  data: result,
                });
              }
            }
          );
        } else {
          res.status(403).json({
            status: 403,
            message: "Account already exists!",
          })
        }
      }
    }
  );
});

//Used AI to write this endpoint
app.post("/change-password", (req, res) => {
  const { username, currentPassword, newPassword } = req.body;
  if (!username || !currentPassword || !newPassword) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Verify current password
  connection.execute(
    "select * from users where username=? and password=?",
    [username, currentPassword],
    function (err, result) {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (!result || result.length !== 1) {
        return res
          .status(403)
          .json({ message: "Current password is incorrect or user not found" });
      }

      // Update to new password
      connection.execute(
        "update users set password=? where username=?",
        [newPassword, username],
        function (err2, result2) {
          if (err2) {
            return res.status(500).json({ message: "Database error", error: err2 });
          }
          return res.json({ status: 200, message: "Password updated successfully" });
        }
      );
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));