var koa = require('koa');
var Router = require('koa-router');

var Product = require('./models/product');

var router = Router();

router.get('/product/:id', function* (next) {
	this.body = yield Product.findById(this.params.id);
});

router.post('/product', function* (next) {
        this.body = yield Product.create({
		name: this.request.body.name,
		color: this.request.body.color,
		price: this.request.body.price
	});
});

router.del('/product/:id', function* (next) {
        yield Product.destroy({
		where: {
			id: this.params.id
		}
	});

	this.status = 204;
});

router.get('/products', function* (next) {
	this.body = yield Product.findAll();
});

module.exports = router;

