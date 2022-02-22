const express = require('express');
const router = express.Router();
const questRoutes = require('./quest.route');

router.use('/quests', questRoutes);
module.exports = router;