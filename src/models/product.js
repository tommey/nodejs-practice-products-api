var Sequelize = require('sequelize');

var config = require('../../config');

var connection = new Sequelize(config.mySqlConnection);

var Product = connection.define('Product', {
	name: { type: Sequelize.STRING },
	color: { type: Sequelize.STRING },
	price: { type: Sequelize.INTEGER }
});

// Database recreation.
//Product.sync({force:true}).then(function() { console.log('everything is created'); }).catch(console.log);

module.exports = Product;

