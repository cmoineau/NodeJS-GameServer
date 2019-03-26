var mongoose = require('mongoose');
const User = mongoose.model('User');
const sessionChecker = require('../utils/sessionChecker');

exports.addUser = function (userName) {
	var myUser = new User({
		name : userName,
		randomizer : 0,
		cookieClicker : 0,
		isBanned : false
	});
	myUser.save(function (err){
  		if(err !=null){
  			console.log("Erreur lors de l'insertion !" + "\n######\n" + err);
  		}
  	});
}

exports.checkUser = function(userName,req,res){
	console.log('Est-ce que ' + userName + ' est dans la BDD ?');
	User.findOne({name : userName}, function(err, theUser) {
		flag = false;
        if (err){
            console.log(err);
        }
        if(theUser === null){
        	console.log('Non ...');
        	res.send('Veuillez vous enregistrer pour accéder au site.');
        }else{
        	console.log('Trouvé !');
        	sessionChecker.login(req,res);
        }
    });
}

exports.banUser = function(userName){
	User.findOne({name : userName}, function(err, theUser) {
		if (err){
            console.log(err);
        }else{
        	theUser.isBanned =true;
        }
	});
}
exports.unBanUser = function(userName){
	User.findOne({name : userName}, function(err, theUser) {
		if (err){
            console.log(err);
        }else{
        	theUser.isBanned =false;
        }
	});
}