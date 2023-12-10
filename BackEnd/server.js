const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Parse JSON requests

// Sample in-memory user data (replace this with a database)
const users = [];

app.post('/api/register', (req, res) => {
    console.log('Received registration request');
  const { username, email, password } = req.body;

  // Validate input (add more validation as needed)
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if the user already exists
  if (users.some((user) => user.username === username || user.email === email)) {
    return res.status(409).json({ error: 'ასეთი მომხმარებელი უკვე არსებობს' });
  }

  // Save the user to the in-memory array (replace with database logic)
  const newUser = { username, email, password };
  users.push(newUser);

  res.json({ message: 'მომხმარებელმა წარმატებულად გაიარა რეგისტრაცია' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validate input (add more validation as needed)
  if (!username || !password) {
    return res.status(400).json({ error: 'გთხოვთ შეიყვანოთ სახელი და პაროლი' });
  }

  // Check if the user exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'არასწორი მონაცემები' });
  }

  res.json({ message: 'შესვლა წარმატებულად დასრულდა' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
