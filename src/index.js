const Koa = require("koa") ;
const conf = require('./config/index');
const indexRoutes = require('./router/index');
const booksRoutes = require('./router/books');

const  app = new Koa();
const cache = require('koa-cache-lite');

// use in-memory cache
cache.configure({
	'/api/v1/books':3000
}, {
});

const PORT = conf.app.port || 3000;

// routes
app.use(cache.middleware());
app.use(indexRoutes.routes());
app.use(booksRoutes.routes());

// server
const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
