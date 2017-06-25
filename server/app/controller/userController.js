const user = require('./../models/user.js');

var userControllerOb  = {


    getData : (req,res)=>{
        console.log("hi get");
        res.send();
    },

    sendData : (req,res) => {
    user.create(req.body).then(function(user){
        res.send(user);
        res.end();
    });
}
}
module.exports = userControllerOb;