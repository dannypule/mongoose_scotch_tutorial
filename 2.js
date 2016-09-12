// 2: Create
//=================================

var mongoose = require('mongoose');
var User = require('./app/models/user'); // grab the user model

mongoose.connect('mongodb://localhost/myappdatabase'); // connect to a MongoDB database (either local or hosted)

var newUser = User({ // create a new user  
    name: 'Peter Quill\'s brother',
    username: 'starlord56',
    password: 'password',
    admin: true
});

newUser.save(err=>{ // save the user 
    if(err) throw err;

    console.log('User created!');
});