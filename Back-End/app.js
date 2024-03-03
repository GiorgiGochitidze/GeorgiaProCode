const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 5000;
const cors = require('cors');
const crypto = require("crypto");
const jwt = require("jsonwebtoken"); // Import JWT module
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

app.use(cors());
app.use(express.json());


const generateSecretKey = () => {
  return crypto.randomBytes(64).toString("hex");
};

console.log(generateSecretKey());

const SECRET_KEY = generateSecretKey();



// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" }); // Token expires in 1 hour
};

app.post("/api/register", async (req, res) => {
  const { userName, surName, password } = req.body;

  try {
    // Read the existing data from the file
    const data = fs.readFileSync("registeredUsers.json", "utf8");
    let users = [];
    if (data) {
      // Parse the existing JSON data
      users = JSON.parse(data);
    }

    // Check if the user with the same username already exists
    const existingUser = users.find(user => user.userName === userName);
    if (existingUser) {
      return res.status(400).send("User with the same username already exists");
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add a new user to the array
    const newUser = { id: users.length + 1, userName, surName, password: hashedPassword };
    users.push(newUser);

    // Write the updated data back to the file
    fs.writeFileSync("registeredUsers.json", JSON.stringify(users, null, 2));

    // Generate JWT token
    const token = generateToken(newUser);

    res.json({ token }); // Return token to the client
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/login", async (req, res) => {
  const { userName, surName, password } = req.body;

  try {
    // Read the existing data from the file
    const data = fs.readFileSync("registeredUsers.json", "utf8");
    const users = JSON.parse(data);

    // Find the user by username
    const user = users.find(user => user.userName === userName && user.surName === surName);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Compare hashed password
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Generate JWT token
      const token = generateToken(user);
      res.json({ token }); // Return token to the client
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
