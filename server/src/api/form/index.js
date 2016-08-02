const express = require('express');
const form = require('./form-controller');

const router = express.Router();

router.get('/partner1', form.partner1);

module.exports = router;
