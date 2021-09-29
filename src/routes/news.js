const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/NewsController')


router.use('/:slug', newscontroller.show);
router.use('/', newscontroller.index); // sử dụng tuyến đường / trỏ vào index trong controller

module.exports = router;
