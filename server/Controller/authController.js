const bcrypt = require("bcryptjs");

module.exports={
    getUser: (req, res) => {
        if (req.session.user){
            res.status(200).json(req.session.user)
        }
    },
    registerUser: function (req,res){
        const {username, password, email, firstName, city, state} = req.body
        const db = req.app.get("db");

        db.checkForTakenUsernameOrEmail(username, email).then(count => {
            if(+count[0].count === 0){
                const salt = bcrypt.genSaltSync(10)
                bcrypt.hash(password, salt).then(hash => {
                    db.registerUsers(firstName, email, username, city, state, hash).then(() => {
                        db.getPassword(username).then(user =>{
                            req.session.user ={
                                username,
                                firstName,
                                email,
                                city,
                                state,
                                id: user[0].id
                                
                            }
                            res.status(200).json(req.session.user);
                        })
                    })
                })
            } else {
                res.status(409).json({
                    error: "The username or email already exists with Concert Quest"
                })
            }
        })
    },
    loginUser: function(req, res){
        const {username, password} = req.body;
        const db = req.app.get("db");
        db.getPassword(username).then(user => {
            let hash = user[0].password;
            bcrypt.compare(password, hash).then(areSame => {
                if(areSame){
                    req.session.user ={
                        username,
                        firstName: user[0].first_name,
                        email: user[0].email,
                        city: user[0].city,
                        state: user[0].state,
                        id: user[0].id
                    }
                    res.status(200).json(req.session.user);
                } else {
                    res.status(401).json({
                        error: "The username or password you entered is incorrect"
                    })
                }
            })
        })
    },
    logOut: function(req, res){
        req.session.destroy()
        return res.sendStatus(200)
    }
}