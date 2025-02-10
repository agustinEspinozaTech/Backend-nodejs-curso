import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import carritoRoutes from "./routes/carrito.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// Rutas de las API
app.use("/api/productos", productRoutes);
app.use("/api/carrito", carritoRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}).catch((err) => {
    console.error("Error al iniciar la aplicación:", err);
});
