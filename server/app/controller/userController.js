const user = require('./../models/user.js');

var userControllerOb  = {


    getData : (req,res)=>{
        console.log("hi get");
        res.send();
    },

    sendData : (req,res) => {
    user.create(req.body).then(function(user){
        console.log(req.body);
        res.send(user);
        res.end();
    });
},
deleteData : (req,res) => { 
    var id = req.params.id;
    console.log(req.params.id);
    user.findOneAndRemove({ 'id': id })
        .then(data => console.log(data));
    
    //User.findOneAndRemove returns a promise, so to execute that promise we have to chain .then method on it.
    res.end();
}



   
    
}
module.exports = userControllerOb;