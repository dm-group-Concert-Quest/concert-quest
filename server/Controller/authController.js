const bcrypt = require("bcryptjs");

module.exports = {
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).json(req.session.user);
        };
    },

    registerUser: function (req, res) {
        const { username, password, email, first_name, city } = req.body;
        const db = req.app.get("db");

        db.auth.checkForTakenUsernameOrEmail(username, email).then(count => {
            if (+count[0].count === 0) {
                const salt = bcrypt.genSaltSync(10)
                bcrypt.hash(password, salt).then(hash => {
                    db.auth.registerUsers(first_name, email, username, city, hash).then(() => {
                        db.auth.getPassword(username).then(user => {
                            req.session.user = {
                                username,
                                password,
                                first_name,
                                email,
                                city,
                                user_id: user[0].user_id
                            };
                            res.status(200).json(req.session.user);
                        });
                    });
                });
            } else {
                res.status(409).json({
                    error: "The username or email already exists with Concert Quest"
                });
            };
        });
    },

    loginUser: function (req, res) {
        const { username, password } = req.body;
        const db = req.app.get("db");
        db.auth.getPassword(username).then(user => {
            let hash = user[0].password;
            bcrypt.compare(password, hash).then(areSame => {
                if (areSame) {
                    req.session.user = {
                        username,
                        password: user[0].password,
                        first_name: user[0].first_name,
                        email: user[0].email,
                        city: user[0].city,
                        user_id: user[0].user_id
                    };
                    res.status(200).json(req.session.user);
                } else {
                    res.status(401).json({
                        error: "The username or password you entered is incorrect"
                    });
                };
            });
        });
    },

    logOut: function (req, res) {
        req.session.destroy()
        return res.sendStatus(200)
    },

    updateUsername: async (req, res) => {
        const { username } = req.body;
        const { user_id } = req.session.user;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForUsername(username);

        if (foundUser[0]) {
            res.status(409).json("Username Taken");
        } else {
            const usernameEdit = await db.auth.updateUsername(user_id, username);

            req.session.user = {
                user_id: usernameEdit[0].user_id,
                username: usernameEdit[0].username,
                password: usernameEdit[0].password,
                first_name: usernameEdit[0].first_name,
                city: usernameEdit[0].city,
                email: usernameEdit[0].email
            };

            res.status(200).json(req.session.user);
        };
    },

    updatePassword: async (req, res) => {
        const { password } = req.body;
        const { user_id } = req.session.user;
        const db = req.app.get("db");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const editPassword = await db.auth.updatePassword(user_id, hash);

        req.session.user = {
            user_id: editPassword[0].user_id,
            username: editPassword[0].username,
            password: editPassword[0].password,
            first_name: editPassword[0].first_name,
            city: editPassword[0].city,
            email: editPassword[0].email
        };

        res.status(200).json(req.session.user);
    },
    updateFirstName: async (req, res) => {
        const { first_name } = req.body;
        const { user_id } = req.session.user;
        const db = req.app.get("db");

        const editFirstName = await db.auth.updateFirstName(user_id, first_name);

        req.session.user = {
            user_id: editFirstName[0].user_id,
            username: editFirstName[0].username,
            password: editFirstName[0].password,
            first_name: editFirstName[0].first_name,
            city: editFirstName[0].city,
            email: editFirstName[0].email
        };

        res.status(200).json(req.session.user);
    },

    updateCity: async (req, res) => {
        const { city } = req.body;
        const { user_id } = req.session.user;
        const db = req.app.get("db");

        const editCity = await db.auth.updateCity(user_id, city);

        req.session.user = {
            user_id: editCity[0].user_id,
            username: editCity[0].username,
            password: editCity[0].password,
            first_name: editCity[0].first_name,
            city: editCity[0].city,
            email: editCity[0].email
        };

        res.status(200).json(req.session.user);
    },

    updateEmail: async (req, res) => {
        const { email } = req.body;
        const { user_id } = req.session.user;
        const db = req.app.get("db");

        const editEmail = await db.auth.updateEmail(user_id, email);

        req.session.user = {
            user_id: editEmail[0].user_id,
            username: editEmail[0].username,
            password: editEmail[0].password,
            first_name: editEmail[0].first_name,
            city: editEmail[0].city,
            email: editEmail[0].email
        };

        res.status(200).json(req.session.user);
    },

    deleteUser: async (req, res) => {
        const { user_id } = req.session.user;
        const db = req.app.get("db");

        await db.auth.deleteUser(user_id);
        res.sendStatus(200);
    }
};