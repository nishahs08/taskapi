var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var userSchema = new Schema({
    hash: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    mobile: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    }
    /*username  : String,
    password : { type: String},
    contact_no : String,
    email : String,
    status : { type: Boolean, required: true, unique: true, default : true }*/
});

module.exports = mongoose.model('User', userSchema);
