var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({ //create a schema  
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});


userSchema.pre('save', true, function(next, done){ // on every save, add the date
    // get the current date 
    var currentDate = new Date();

    //change the updated_at field to current date
    this.updated_at = currentDate;

    // if create_at doesn't exist, add to that field
    if(!this.created_at){
        this.created_at = currentDate;
    }
    done();
    next(); // ???
});

// custom method to add string to the end of name
// you can create more important methods like name validations of formatting
// you can also do queries and find similar users
userSchema.method({
    dudify: function(){
        // add some stuff to the user's name
        this.name = this.name +'-dude';

        return this.name;
    }
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

module.exports = User; // make this available to our users in our Node applications