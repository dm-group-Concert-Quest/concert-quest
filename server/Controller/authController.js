const bcrypt = require("bcryptjs");

module.exports = {
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).json(req.session.user)
        }
    },
    registerUser: function (req, res) {
        const { username, password, email, firstName, city, state } = req.body
        const db = req.app.get("db");

        db.checkForTakenUsernameOrEmail(username, email).then(count => {
            if (+count[0].count === 0) {
                const salt = bcrypt.genSaltSync(10)
                bcrypt.hash(password, salt).then(hash => {
                    db.registerUsers(firstName, email, username, city, state, hash).then(() => {
                        db.getPassword(username).then(user => {
                            req.session.user = {
                                username,
                                password,
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
    loginUser: function (req, res) {
        const { username, password } = req.body;
        const db = req.app.get("db");
        db.getPassword(username).then(user => {
            let hash = user[0].password;
            bcrypt.compare(password, hash).then(areSame => {
                if (areSame) {
                    console.log(user[0]);
                    req.session.user = {
                        username,
                        password: user[0].password,
                        firstname: user[0].firstname,
                        email: user[0].email,
                        city: user[0].city,
                        state: user[0].state,
                        userid: user[0].userid
                    }
                    console.log(req.session.user);
                    res.status(200).json(req.session.user);
                } else {
                    res.status(401).json({
                        error: "The username or password you entered is incorrect"
                    })
                }
            })
        })
    },
    logOut: function (req, res) {
        req.session.destroy()
        return res.sendStatus(200)
    },
    updateUsername: async (req, res) => {
        const { username } = req.body;
        const { userid } = req.session.user;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForUsername(username);

        if (foundUser[0]) {
            res.status(409).json("Username Taken");
        } else {
            const usernameEdit = await db.updateUsername(userid, username);

            req.session.user = {
                userid: usernameEdit[0].userid,
                username: usernameEdit[0].username,
                password: usernameEdit[0].password,
                firstname: usernameEdit[0].firstname,
                city: usernameEdit[0].city,
                state: usernameEdit[0].state,
                email: usernameEdit[0].email
            };

            res.status(200).json(req.session.user);
        };
    },
    updatePassword: async (req, res) => {
        const { password } = req.body;
        const { userid } = req.session.user;
        const db = req.app.get("db");

        const editPassword = await db.updatePassword(userid, password);

        req.session.user = {
            userid: editPassword[0].userid,
            username: editPassword[0].username,
            password: editPassword[0].password,
            firstname: editPassword[0].firstname,
            city: editPassword[0].city,
            state: editPassword[0].state,
            email: editPassword[0].email
        };

        res.status(200).json(req.session.user);
    },
    updateFirstName: async (req, res) => {
        const { firstName } = req.body;
        const { userid } = req.session.user;
        const db = req.app.get("db");

        const editFirstName = await db.updateFirstName(userid, firstName);

        req.session.user = {
            userid: editFirstName[0].userid,
            username: editFirstName[0].username,
            password: editFirstName[0].password,
            firstname: editFirstName[0].firstname,
            city: editFirstName[0].city,
            state: editFirstName[0].state,
            email: editFirstName[0].email
        };

        res.status(200).json(req.session.user);
    },
    updateCity: async (req, res) => {
        const { city } = req.body;
        const { userid } = req.session.user;
        const db = req.app.get("db");

        const editCity = await db.updateCity(userid, city);

        req.session.user = {
            userid: editCity[0].userid,
            username: editCity[0].username,
            password: editCity[0].password,
            firstname: editCity[0].firstname,
            city: editCity[0].city,
            state: editCity[0].state,
            email: editCity[0].email
        };

        res.status(200).json(req.session.user);
    },
    updateState: async (req, res) => {
        const { state } = req.body;
        const { userid } = req.session.user;
        const db = req.app.get("db");

        const editState = await db.updateState(userid, state);

        req.session.user = {
            userid: editState[0].userid,
            username: editState[0].username,
            password: editState[0].password,
            firstname: editState[0].firstname,
            city: editState[0].city,
            state: editState[0].state,
            email: editState[0].email
        };

        res.status(200).json(req.session.user);
    },
    updateEmail: async (req, res) => {
        const { email } = req.body;
        const { userid } = req.session.user;
        const db = req.app.get("db");

        const editEmail = await db.updateEmail(userid, email);

        req.session.user = {
            userid: editEmail[0].userid,
            username: editEmail[0].username,
            password: editEmail[0].password,
            firstname: editEmail[0].firstname,
            city: editEmail[0].city,
            state: editEmail[0].state,
            email: editEmail[0].email
        };

        res.status(200).json(req.session.user);
    },
    deleteUser: async (req, res) => {
        const { userid } = req.session.user;
        const db = req.app.get("db");

        await db.deleteUser(userid);
        res.sendStatus(200);
    }
}