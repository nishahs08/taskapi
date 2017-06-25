const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    name : {
        type : String
    },
    id : {
        type : String
    }
    
});

const user = mongoose.model('user',userSchema);
module.exports = user;