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

function getProjectTask(projectId) {
    return db('task')
    .join('project', 'project.id', 'project_id' )
    .select(
        'project.name',
        'project.description',
        'task.description',
        'task.notes',
        'task.completed'
    )
    .where('project_id', projectId)
}

function findById(id) {
    return db('project').where({ id }).first()
}

function addProject(project) {
    return db('project')
    .insert(project)
    .then((ids) => {
        const [id] = id;
        return findById(id)
    })
}

function addResource(resource) {
    return db('resource')
    .insert(resource)
    .then((ids) => {
        const [id] = ids
        return findById(id)
    })
}

