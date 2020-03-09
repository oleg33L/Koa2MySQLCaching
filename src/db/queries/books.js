const pool = require('../connect');

async function getAllBooks() {
	const result = await pool.query('SELECT * FROM shopinfo.books limit 100;');
	if (result[0].length < 1) {
		throw new Error('books with this was not found');
	}
	return result[0];
}

async function addBook({title, date, author, description, image}) {
	const result = await pool.query(
			'INSERT INTO shopinfo.books SET ?',
			{title, date, author, description, image}
	);
	if (!result[0].length < 1) {
		throw new Error('books with this id was not found');
	}
	return result[0][0];

}

function updateBook(id, book) {
	return db('books')
			.update(book)
			.where({id: parseInt(id)})
			.returning('*');
}

module.exports = {
	getAllBooks,
	addBook,
	updateBook,
};
