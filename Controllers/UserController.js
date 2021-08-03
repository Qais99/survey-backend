const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const path1 = path.join(process.mainModule.path, 'Shared', 'users.json');

const readFile = cb => {
    const data = fs.readFileSync(path1);
    cb(JSON.parse(data))
}

exports.getUser = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    let returnData = "0";

    readFile(usersData => {
        let id = req.params.id;
        let pass = req.params.pass;
        var user = usersData.find(u => {
            return u.id == id
        });
        
        bcrypt.compare(pass, user.password, function (err, result) {
                if (user == undefined) {
                    returnData = false;
                } else if (result) {
                    returnData = user.name;
                } else {
                    returnData = false;
                }
                res.json(returnData);
        });


    })
}


exports.createuser = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let id;
    readFile(userData => {
        let name = req.params.name;
        let pass = req.params.pass;
        id = userData.length + 1;

        bcrypt.hash(pass, id, function (err, hash) {
            userData.push({ id: id, name: name, password: hash });
            fs.writeFile(path1, JSON.stringify(userData), err => {
                console.log("read file error => " + err);
            });
        });

    })

    res.json(id);
}