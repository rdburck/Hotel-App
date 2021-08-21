const router = require('express').Router();
const userRoutes = require('./userRoutes')
const roomRoutes = require('./rooms');

router.use('/rooms', roomRoutes);
router.use('/users', userRoutes);

module.exports = router;


