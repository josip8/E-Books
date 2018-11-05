'use strict';

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAll);
router.post('/addNew', bookController.addNew);
router.post('/delete', bookController.delete);
router.post('/update', bookController.update);

module.exports = router;
