// 4: Read - find one
//=================================

var mongoose = require('mongoose');
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/myappdatabase'); // connect to a MongoDB database (either local or hosted)

User.find({ // get the user starlord55
    username: 'starlord55' 
}, function(err, user){
    if (err) throw err;

    console.log(user); // output the user object
});