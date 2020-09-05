const db = require('./data/dbConfig');

module.exports = {
    getProject,
    getResource,
    getTask,
    getProjectTask,
    addProject,
    addResource,
    addTask,
    findById,
    connectResource,
    getProjectResources
}

function getProject() {
    return db('project')
}

function getResource() {
    return db('resource')
}