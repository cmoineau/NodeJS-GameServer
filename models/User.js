const mongoose = require('mongoose');
console.log('Création d\'un schémas User');
var schema = new mongoose.Schema({ 
	name : String, 
	randomizer : Number, 
	cookieClicker : Number,
	isBanned : Boolean
});
module.exports = mongoose.model('User', schema);