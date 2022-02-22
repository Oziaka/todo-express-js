const questDao = require('../dao/quest.dao');
var questController = {
    addQuest: addQuest,
    findQuest: findQuest,
    findQuestById: findQuestById,
    updateQuest: updateQuest,
    deleteQuestById: deleteQuestById
}

deleteMessage = "Quest deleted successfully";
updateMessage = "Quest updated successfully";

function addQuest(req, res) {
    let quest = req.body;
    quest.isDone = false
    questDao.create(quest).then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
        });
}

function findQuestById(req, res) {
    questDao.findById(req.params.id).then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
        });
}


function deleteQuestById(req, res) {
    questDao.deleteById(req.params.id).then((data) => {
        res.status(200).json({
            message: deleteMessage,
            quest: data
        })
    })
        .catch((error) => {
            console.log(error);
        });
}


function updateQuest(req, res) {
    questDao.updateQuest(req.body, req.params.id).then((data) => {
        res.status(200).json({
            message: updateMessage,
            quest: data
        })
    })
        .catch((error) => {
            console.log(error);
        });
}

function findQuest(req, res) {
    questDao.findAll().then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = questController;