const queries = require('../db/queries/books');

async function GetAllBooks(ctx) {
	try {
		const books = await queries.getAllBooks();
		ctx.body = {
			status: 'success',
			data: books
		};
	} catch (err) {
		console.log(err)
	}
}

async function addBook(ctx) {
	try {
		const book = await queries.addBook(ctx.request.body);
		if (book.length) {
			ctx.status = 201;
			ctx.body = {
				status: 'success',
				data: book
			};
		} else {
			ctx.status = 400;
			ctx.body = {
				status: 'error',
				message: 'Something went wrong.'
			};
		}
	} catch (err) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: err.message || 'Sorry, an error has occurred.'
		};
	}
}

async function updateBook(ctx) {
	try {
		const book = await queries.updateBook(ctx.params.id, ctx.request.body);
		if (book.length) {
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				data: book
			};
		} else {
			ctx.status = 404;
			ctx.body = {
				status: 'error',
				message: 'That book does not exist.'
			};
		}
	} catch (err) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: err.message || 'Sorry, an error has occurred.'
		};
	}
}

module.exports = {
	GetAllBooks,
	addBook,
	updateBook,
};
