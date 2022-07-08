const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.list);
router.post('/add', usuariosController.save)


module.exports = router;