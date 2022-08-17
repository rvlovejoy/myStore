const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const tasksRouter = require('./tasks.router');
const jobRouter = require('./job_number.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/task', tasksRouter);
  router.use('/jobs', jobRouter);
}

module.exports = routerApi;
