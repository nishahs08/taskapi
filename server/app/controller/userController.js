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
    user.find({id}).remove(); 
    res.end();
}



   
    
}
module.exports = userControllerOb;