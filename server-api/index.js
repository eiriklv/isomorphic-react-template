'use strict';

var express = require('express');
var router = express();

router.use(require('./routes/places-single')('/places/:id'));
router.use(require('./routes/places-all')('/places'));
router.use(require('./routes/user')('/user'));

module.exports = router;
