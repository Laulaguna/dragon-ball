const express = require("express");
const router = express.Router();
const { getAllCharacters } = require("../controllers/characters.controllers")

router.get("/characters", getAllCharacters)



module.exports = router 