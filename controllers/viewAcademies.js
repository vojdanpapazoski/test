const view = require("../models/academies/academiesSchema");

const RegisterView = async (req, res) => {
    try {
        res.render('register');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
} 



const LoginView = async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
} 



const Academiesiew = async (req, res) => {
    try {
        res.render('academies');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
} 
