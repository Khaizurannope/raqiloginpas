import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Path to users.json
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    // Read existing users
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Check if user exists and password matches
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    res.status(200).json({ message: 'Login successful.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
