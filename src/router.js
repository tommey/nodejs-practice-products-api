var koa = require('koa');
var Router = require('koa-router');

var Product = require('./models/product');

var router = Router();

router.get('/product/:id', function* (next) {
	this.body = yield User.find({_id: this.params.id});
});

router.post('/product', function* (next) {
        var product = new Product({
		name: this.request.body.name,
		color: this.request.body.color,
		price: this.request.body.price
	});

	this.body = yield product.save();
});

router.del('/product/:id', function* (next) {
        yield Product.remove({id: this.params.id});

	this.status = 204;
});

router.get('/products', function* (next) {
	this.body = yield Product.find();
});

module.exports = router;

