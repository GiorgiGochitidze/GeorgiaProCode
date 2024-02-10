const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
  const { username, surName, password } = req.body;

  // Read the existing data from the file
  fs.readFile("registeredUsers.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    let users = [];
    if (data) {
      // Parse the existing JSON data
      users = JSON.parse(data);
    }

    // Check if the user with the same username already exists
    const existingUserIndex = users.findIndex(user => user.username === username);
    if (existingUserIndex !== -1) {
      // If the username is found, check if the surname is different
      if (users[existingUserIndex].surName !== surName) {
        // Update the user's surname
        users[existingUserIndex].surName = surName;
        // Write the updated data back to the file (prettified JSON)
        fs.writeFile("registeredUsers.json", JSON.stringify(users, null, 2), (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
          }
          console.log("User data updated successfully");
          res.send("User data updated successfully");
        });
      } else {
        // User with the same username and surname already exists
        return res.status(400).send("User with the same username and surname already exists");
      }
    } else {
      // Add a new user to the array
      users.push({ username, surName, password });
      // Write the updated data back to the file (prettified JSON)
      fs.writeFile("registeredUsers.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Internal Server Error");
        }
        console.log("User data saved successfully");
        res.send("Registration successful");
      });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
