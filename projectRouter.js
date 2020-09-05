const express = require('express')
const router = express.Router()
const projectModel = require('./projectModel')

router.get('/projects', async (req, res) => {
    projectModel
    .getProject()
    .then((project) => res.status(200).json(project))
    .catch((err) => {
        res.status(400).json({ errorMessage: 'issue with the server' })
    })
})

router.get('/resources', async (req, res) => {
    projectModel
    .getResource()
    .then((project) => res.status(200).json(project))
    .catch((err) => {
        res.status(400).json({ errorMessage: "issue with the server" })
    })
})