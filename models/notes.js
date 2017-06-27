var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var notesSchema = new Schema({
    user_id : {
        type: String,
        required: true
    },
    notes : { 
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Note', notesSchema);