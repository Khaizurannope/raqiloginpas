import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Path to users.json
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    // Read existing users
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Check if username or email already exists
    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      return res.status(409).json({ error: 'Username or email already exists.' });
    }

    // Add new user
    const newUser = { username, email, password };
    users.push(newUser);

    // Save back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'User registered successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
