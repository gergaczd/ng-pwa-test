'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', require('./actions/get'));

app.use(router.middleware());

module.exports = app;
