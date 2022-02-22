const Quest = require('../model/Quest');
var questDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateQuest: update
}

function findAll() {
    return Quest.findAll();
}

function findById(id) {
    return Quest.findByPk(id);
}

function deleteById(id) {
    return Quest.destroy({where: {id: id}});
}

function create(quest) {
    var newQuest = new Quest(quest);
    return newQuest.save();
}

function update(quest, id) {
    var updateQuest = {
        title: quest.title,
        isDone: quest.isDone,
        description: quest.description,
        isUrgent: quest.isUrgent,
        isImportant: quest.isImportant
    };
    return Quest.update(updateQuest, {where: {id: id}});
}

module.exports = questDao;