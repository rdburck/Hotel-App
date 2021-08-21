const router = require('express').Router();
const testRoutes = require('./testRoutes')

const roomRoutes = require('./rooms');

router.use('/test', testRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;


