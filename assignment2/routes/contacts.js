const express = require('express');

const contactsControl= require('../controllers/contacts');

const router = express.Router();

router.get('/', contactsControl.getData);

router.get('/:id', contactsControl.getDataById);

module.exports = router;
