// 3: Read - find all
//=================================

var mongoose = require('mongoose');
var User = require('./app/models/user'); // grab the user model

mongoose.connect('mongodb://localhost/myappdatabase'); // connect to a MongoDB database (either local or hosted)

User.find({}, (err, users)=>{
    if (err) throw err;

    console.log(users); //object of all the users
});