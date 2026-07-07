import { db } from '../config/firebase.js';

const collection = db.collection('products');

export const getAllProducts = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

export const createProduct = async (productData) => {
  const now = new Date().toISOString();
  const docRef = await collection.add({
    ...productData,
    createdAt: now,
  });
  const createdDoc = await docRef.get();
  return { id: docRef.id, ...createdDoc.data() };
};

export const deleteProduct = async (id) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;
  await docRef.delete();
  return true;
};
