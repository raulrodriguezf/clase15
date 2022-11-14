const router = require('express').Router();

const { Router } = require('express');
const helloRoute = require('./hello');

router.use('/hello', helloRoute);

module.exports = router;