import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || '';
export const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL || '';
export const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY || '';
