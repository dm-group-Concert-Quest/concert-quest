require("dotenv").config()
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT} = process.env
const authController = require("./Controller/authController");

const app = express()
app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log("database connected :D")
})

app.use(session ({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3
    }
}))

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));