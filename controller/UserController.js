import User from "../modal/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export async function createUsers(req, res) {
  // Hash the password
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  // Find the user with the highest id
  const lastUser = await User.findOne().sort({ id: -1 });
  const newId = lastUser && lastUser.id ? lastUser.id + 1 : 1;

  // Check if username already exists
  const existingUsername = await User.findOne({ username: req.body.username });
  if (existingUsername) {
    return res.status(400).json({ message: "Username is already entered" });
  }

  const user = new User({
    id: newId,
    username: req.body.username,
    password: hashedPassword
  });

  user
    .save()
    .then(() => {
      res.json({
        message: "User created successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to create user",
        error: err,
      });
    });
}

export function loginUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }).then((user) => {
    if (user == null) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (!user.active) {
        return res.status(403).json({
          message: "User account is deactivated",
        });
      }

      const isPasswordCorrect = bcrypt.compareSync(password, user.password);

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            username: user.username,
            active: user.active,
            exp: Math.floor(Date.now() / 1000) + 12 * 60 * 60, // Expire in 12 hours
          },
          process.env.JWT_KEY
        );

        res.status(200).json({
          message: "Login successfull",
          token: token,
        });
      } else {
        res.status(404).json({
          message: "wrong password",
        });
      }
    }
  });
}
