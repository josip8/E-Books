'use strict';

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:id', commentController.getAll);
router.post('/', commentController.postNew);
router.post('/delete', commentController.deleteComment);
// router.post('');

module.exports = router;
