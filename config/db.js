import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


let _db;

export const connectDB = async () => {
  try {
    await client.connect();
    _db = client.db(process.env.DB_NAME);
    console.log("Conectado a la base de datos:", process.env.DB_NAME);
  } catch (err) {
    console.error("Error conectando a la base de datos", err);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!_db) throw new Error("No se ha inicializado la base de datos");
  return _db;
};
