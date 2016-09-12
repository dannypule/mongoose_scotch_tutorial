// 4: Read - querying
// get any user that was created in the past month
//=================================

var mongoose = require('mongoose');
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/myappdatabase'); // connect to a MongoDB database (either local or hosted)

var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1); // get the date 1 month ago

User
.find(
    {
        password: 'password' 
    }
)
.where('created_at')
.gt(monthAgo)
.exec((err, users)=>{
    if (err) throw err;

    console.log(users); // show the admins in the past month
});

