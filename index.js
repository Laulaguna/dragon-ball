const express = require("express");
const { connectDB } = require("./src/utils/db")
const router = require("./src/api/routes/characters.routes")
const cors = require("cors")
const env = require("dotenv")

env.config()

/* const cloudinary = require("cloudinary").v2
cloudinary.config({ */

/* }) */

connectDB();

const server = express();
server.use(cors())
const PORT = process.env.PORT;

server.use(express.json())
server.use("/", router)




server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT}`)
})

// todo esto es una API
// modelo --> estructura de BD (colecciones),
// vistas --> routes
// controladores --> funcionalidad para acceder a la BD
// utils --> funciones de validacion, conexion de BD, middleware