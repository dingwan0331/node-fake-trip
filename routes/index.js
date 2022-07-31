var express = require('express');
var router = express.Router();
const user = require('./userRouter')

router.use('/users', user)

module.exports = router;