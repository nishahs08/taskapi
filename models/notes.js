var mongoose = require('mongoose');
var schema = mongoose.Schema();

var notesSchema = new schema({
    user_id : String,
    notes : String,
    status  : { type: Boolean, required: true, unique: true, default : true }
});


const Notes = mongoose.model('notes',noteSchema);

module.exports = Notes ;