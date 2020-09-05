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

function addTask(task) {
    return db('task')
    .insert(task)
    .then((ids) => {
        const [id] = ids;
        return findById(id)
    })
}

function connectResource(project_id, resource_id) {
    return db("project_resources").insert({ resource_id, project_id })
}

function getProjectResources(project_id) {
    return db('project_resources')
    .where({ project_id })
    .join('resource', {'project_resources.resource_id': 'resource.id'})
    .select('resource.*')
}