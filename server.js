const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Path ke file users.json
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

// Endpoint untuk register
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Baca data user dari file
  fs.readFile(USERS_FILE, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read user data.' });
    }

    const users = JSON.parse(data);

    // Periksa apakah email sudah digunakan
    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }

    // Tambahkan user baru
    const newUser = { username, email, password };
    users.push(newUser);

    // Tulis kembali data user ke file
    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Failed to save user data.' });
      }

      res.status(201).json({ message: 'User registered successfully.' });
    });
  });
});

// Endpoint untuk login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Baca data user dari file
  fs.readFile(USERS_FILE, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read user data.' });
    }

    const users = JSON.parse(data);

    // Periksa apakah user valid
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    res.status(200).json({ message: 'Login successful.' });
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
