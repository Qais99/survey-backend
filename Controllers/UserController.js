const usersData  = require('../Shared/users.json');

exports.getUser = (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let id = req.params.id;
    let pass = req.params.pass;

    var user = usersData.find(u=>{
        return u.id == id
    }) 

    if(user == undefined){
        res.json(false);
    }else if(user.password === pass){
        res.json(user.name);
    }else{
        res.json(false);
    }
}