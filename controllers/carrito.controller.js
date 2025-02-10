export const postCarrito = (req, res) => {
    try {
        const carrito = req.body;

        console.log("Carrito recibido:", carrito);

        res.status(200).json({ message: "Carrito recibido y procesado" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
