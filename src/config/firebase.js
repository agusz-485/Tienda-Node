import admin from 'firebase-admin';
import {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
} from './index.js';

const serviceAccount = {
  project_id: FIREBASE_PROJECT_ID,
  client_email: FIREBASE_CLIENT_EMAIL,
  private_key: FIREBASE_PRIVATE_KEY
    ? FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
