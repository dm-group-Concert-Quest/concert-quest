require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const {SERVER_PORT} = process.env
const authController = require("./Controller/authController");
const postController = require("./Controller/postController");

const app = express();
app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log("database connected :D");
});

app.use(session ({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3
    }
}));

//authentication endpoints
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.registerUser);
app.post("/auth/login", authController.loginUser);
app.post("/auth/logout", authController.logOut);
//settings endpoints
app.put("/auth/settings/username", authController.updateUsername);
app.put("/auth/settings/password", authController.updatePassword);
app.put("/auth/settings/first_name", authController.updateFirstName);
app.put("/auth/settings/city", authController.updateCity);
app.put("/auth/settings/state", authController.updateState);
app.put("/auth/settings/email", authController.updateEmail);
app.delete("/auth/settings/user", authController.deleteUser);
//posts endpoints
app.post("/api/tracked", postController.trackBand);
app.delete("/api/tracked", postController.unTrackBand);
app.get("/api/tracked", postController.getTrackedArtists);

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));