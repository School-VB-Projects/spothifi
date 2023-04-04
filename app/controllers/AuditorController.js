const AuditorModel = require('../models/AuditorModel');
const jwt = require('jsonwebtoken');
const {hashPassword, comparePassword} = require('../../services/auth');

async function signUp(req, res) {
    try {
        const {name, mail, authenticationString, age, country} = req.body;

        const existingUser = await AuditorModel.findOne({mail});
        if (existingUser) {
            return res.status(400).json({
                message: "Auditor already exist"
            })
        }

        const hashedPassword = await hashPassword(authenticationString);

        const NewUser = new AuditorModel({
            name,
            mail,
            authenticationString: hashedPassword,
            age,
            country
        });

        await NewUser.save();

        res.json({
            message: "Signup success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

async function logIn(req, res) {
    try {
        const {mail, authenticationString} = req.body;

        const user = await AuditorModel.findOne({mail});
        const match = await comparePassword(authenticationString, user.authenticationString);
        if (!user || !match) return res.status(400).send("Wrong credentials");

        const token = jwt.sign(
            {user},
            process.env.SECRET,
            {
                expiresIn: '3600s',
                algorithm: 'HS256'
            }
        )
        res.setHeader('Authorization', token)
        res.json({
            message: "Login success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

async function logOut(req, res) {
    try {
        req.payload.exp = Math.floor(Date.now() / 1000) - (60 * 60);
        const token = jwt.sign(req.payload, process.env.SECRET, {algorithm: 'HS256'});

        res.setHeader('Authorization', token);
        req.payload = undefined;
        res.json({
            message: 'Logout success'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    signUp,
    logIn,
    logOut
}