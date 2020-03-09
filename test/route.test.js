process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/index');

describe('routes : index', () => {

	describe('GET /', () => {
		it('should return json', (done) => {
			chai.request(server)
					.get('/')
					.end((err, res) => {
						should.not.exist(err);
						res.status.should.eql(200);
						res.type.should.eql('application/json');
						res.body.status.should.equal('success');
						res.body.message.should.eql('hello, world!');
						done();
					});
		});
	});

	describe('GET /api/v1/books', () => {
		it('should return json with 100 books', (done) => {
			chai.request(server)
					.get('/api/v1/books')
					.end((err, res) => {
						res.status.should.eql(200);
						res.type.should.eql('application/json');
						res.body.status.should.equal('success');
						res.body.data.length.should.equal(100);
						done();
					});
		});
	});

});
