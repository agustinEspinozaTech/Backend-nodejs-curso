import { Router } from "express";
import { postCarrito } from "../controllers/carrito.controller.js";

const router = Router();


router.post("/", postCarrito);

export default router;
