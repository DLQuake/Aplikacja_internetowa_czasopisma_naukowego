var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var database = require('../database/database')

router.post('/auth_register', function (req, res, next) {
    const imie = req.body.imie;
    const nazwisko = req.body.nazwisko;
    const email = req.body.email;
    const login = req.body.login;
    const haslo = req.body.haslo;
    const chaslo = req.body.chaslo;

    if (chaslo == haslo) {
        database.query(
            "INSERT INTO uzytkownik (imie, nazwisko, email, login, haslo) VALUES (?,?,?,?,?)",
            [imie, nazwisko, email, login, haslo],
            (err, result) => {
                if (err) {
                    res.send({ err: err });
                }

                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "Błędna rejestracja" })
                }
            }
        );
    }
});

module.exports = router;
