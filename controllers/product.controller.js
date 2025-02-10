import { ObjectId } from "mongodb";
import { getProductosCollection } from "../models/product.model.js";

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const collection = getProductosCollection();
    const products = await collection.find().toArray();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = getProductosCollection();
    const product = await collection.findOne({ _id: new ObjectId(id) });
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const collection = getProductosCollection();
    const result = await collection.insertOne(newProduct);
    res.status(201).json({ message: "Producto creado", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un producto existente
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const collection = getProductosCollection();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto actualizado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = getProductosCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto eliminado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
