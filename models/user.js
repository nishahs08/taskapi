var mongoose = require('mongoose');
var schema = mongoose.Schema();

var userSchema = new schema(
    {
        hash_id : String,
        username  : String,
        password : { type: String},
        contact_no : String,
        email : String,
        status : { type: Boolean, required: true, unique: true, default : true }

    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
