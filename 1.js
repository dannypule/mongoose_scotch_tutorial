// 1: Sample usage
//=================================

var mongoose = require('mongoose');
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/myappdatabase'); // connect to a MongoDB database (either local or hosted)

var chris = new User({ //create a new user called chris
    name: 'Boyo',
    username: 'boyo1',
    password: 'password'
});

// call the custom method. this will just add -dude to his name
// user will now be called Chris-dude
chris.dudify((err, name) =>{
    if (err) throw err;

    console.log(`Your new name is ${name}`);
});

chris.save(err=>{
    if (err) throw err;

    console.log(`User saved successfully`);
});













