var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var database = require('../database/database')

router.post('/auth_login', function (req, res, next) {
    const login = req.body.login;
    const haslo = req.body.haslo;

    database.query(
        "SELECT * FROM uzytkownik WHERE login = ? AND haslo = ?",
        [login, haslo],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Błędny login lub hasło" })
            }
        }
    );
});

module.exports = router;