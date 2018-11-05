'use strict';

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.get('/:id', gradeController.getAll);

module.exports = router;
