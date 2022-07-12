const { Router } = require('express');
const express = require('express');
const controller = require('../controllers/usuariosController');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

//routes
//router.get('/carnet_dosis', usuariosController.mostrar);

router.post('/add', usuariosController.save)
router.get('/tabla_pacientes', usuariosController.mostrar)
router.get('/delete/:id', usuariosController.delete);

module.exports = router;