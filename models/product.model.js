import { getDB } from "../config/db.js";

const collectionName = "productos";

export const getProductosCollection = () => {
  const db = getDB();
  return db.collection(collectionName);
};
