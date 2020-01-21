const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/posts');

router.get('/', getAll);

module.exports = router;
