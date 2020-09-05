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

router.get("/tasks", async (req, res) => {
    projectModel
      .getTask()
      .then((task) => res.status(200).json(task))
      .catch((err) => {
        console.log(err);
        res.status(400).json({ errorMessage: "issue with the server" });
      });
  });

  router.get('/projects/:id/resources', async (req, res) => {
      const resources = await projectModel.getProjectResources(req.params.id)
      res.json(resources)
  })

  