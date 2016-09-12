// 6: Update - GET A USER, THEN UPDATE
//=================================

var mongoose = require('mongoose');
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/myappdatabase'); // connect to a MongoDB database (either local or hosted)

// get a user with the ID of 1
User.findById('57d6cfb9b8075b5858fd89e3', (err, user)=>{
    if (err) throw err;

    //change the user's username
    user.username = "bingo55";

    // save the user
    user.save(err=>{
        if (err) throw err;

        console.log('User updated!');
    });
})