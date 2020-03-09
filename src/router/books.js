const Router = require('koa-router');
const router = new Router();
const BooksController = require('../controller/books');
const conf = require('../config/index');
const BASE_URL = conf.app.booksBaseUrl;

router.get(BASE_URL,  BooksController.GetAllBooks);
router.post(`${BASE_URL}`, BooksController.addBook);
router.put(`${BASE_URL}/:id`, BooksController.updateBook);

module.exports = router;
