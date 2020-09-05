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

function getTask() {
    return db('task')
    .join('project', 'project.id', 'task.project_id')
    .select(
        'project.name',
        'project.description',
        'task.description',
        'task.completed'
    )
}