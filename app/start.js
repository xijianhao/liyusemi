/* eslint no-param-reassign: 0 */

const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const koaStatic = require('koa-static');
const app = new Koa();

const staticPath = '../build';

app.use(router.routes());
app.use(router.allowedMethods());
app.use(koaStatic(path.join(__dirname, staticPath)));

app.listen(80);