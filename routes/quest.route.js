const express = require('express');
const router = express.Router();
const questController = require('../controller/quest.controller');

router.post('/', questController.addQuest);
router.get('/', questController.findQuest);
router.get('/:id', questController.findQuestById);
router.put('/:id', questController.updateQuest);
router.delete('/:id', questController.deleteQuestById);

module.exports = router;
