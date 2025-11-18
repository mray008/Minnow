import express from "express";
import cors from "cors";
import { users } from "./users.js";

const app = express();
app.use(cors()); // allow requests from frontend
app.use(express.json());

app.post("/login", (req, res) => {
  connection.execute(
  "select * from users where username=? and password=?",
    [
      req.body.Username,
      req.body.Password,
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
      req.body.Username,
    ],
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        if (result.length == 0) {
          connection.execute(
            "insert into user_information (username,password,role) values (?,?,?)",
            [
              req.body.Username,
              req.body.Password,
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));