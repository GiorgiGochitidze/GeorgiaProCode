const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Import JWT module
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const User = require("./User.js");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const dbUser = process.env.USER_PASS

const uri = `mongodb+srv://giorgigochitidze5555:${dbUser}@cluster0.bjiijcc.mongodb.net/GeorgianProCode?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Succesfully Connected to MongoDB");
  })
  .catch((err) => {
    console.log("error with mongodb connection", err);
  });

const generateRandomString = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
};

const secretKey = generateRandomString(64);

const generateToken = (user) => {
  return jwt.sign(
    { userName: user.userName, userType: user.userType },
    secretKey
  );
};

app.post("/register", (req, res) => {
  const { userName, gmail, password } = req.body;
  console.log({ userName, gmail, password });

  User.findOne({ $or: [{ userName }, { gmail }] }).then((exitingUser) => {
    if (exitingUser) {
      return res.status(400).send("ასეთი მომხმარებელი უკვე არსებობს");
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).send("Internal Server Error");
      }

      const newUser = new User({
        userName,
        gmail,
        password: hash,
        userType: "student",
      });

      newUser
        .save()
        .then(() => {
          console.log("მომხმარებელი დარეგისტრირდა წარმატებით");
          res.status(200).send("მომხმარებელი დარეგისტრირდა წარმატებით");
        })
        .catch((err) => {
          console.error("Error registering user:", err);
          res.status(500).send("Internal Server Error");
        });
    });
  });
});

app.post("/login", (req, res) => {
  const { userName, gmail, password } = req.body;

  User.findOne({ userName, gmail }).then((user) => {
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found", message: "User Not Found" });
    }
    bcrypt
      .compare(password, user.password)
      .then((isMatch) => {
        if (isMatch) {
          const token = generateToken({
            userName: user.userName,
            userType: user.userType,
          });
          res
            .status(200)
            .json({ message: "შესვლა წარმატებით დასრულდა", token });
        } else {
          return res.status(401).json({ message: "პაროლი არასწორია" });
        }
      })
      .catch((err) => {
        // Error occurred while comparing passwords
        console.error("Error comparing passwords:", err);
        res.status(500).json({ error: "Internal Server Error" });
      })
      .catch((err) => {
        // Error occurred while finding the user
        console.error("Error finding user:", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
});

app.post('/loadUsersList', async (req, res) => {
  try {
    const usersList = await User.find({});
    const usernames = usersList.map(user => user.userName);

    res.status(200).json(usernames);
  } catch (err) {
    res.status(500).send('Something went wrong when loading users');
    console.log('Something went wrong when loading users', err);
  }
});


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
