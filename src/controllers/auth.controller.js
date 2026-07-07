import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

const FAKE_USER = {
  email: 'admin@example.com',
  password: 'Admin1234',
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email !== FAKE_USER.email || password !== FAKE_USER.password) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const payload = {
    email,
    role: 'admin',
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

  res.status(200).json({ token });
};
