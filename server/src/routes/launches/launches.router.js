const express = require('express');

const { 
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require('./launches.controller');

const lauchesRouter = express.Router();

lauchesRouter.get('/', httpGetAllLaunches);
lauchesRouter.post('/', httpAddNewLaunch);
lauchesRouter.delete('/:id', httpAbortLaunch);

module.exports = lauchesRouter;
