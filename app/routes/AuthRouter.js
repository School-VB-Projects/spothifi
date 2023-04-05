const express = require('express');
const router = express.Router();

const AuditorController = require('../controllers/AuthController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Registration to the application as an auditor
 * @route POST /signup
 * @summary Response with signup success
 * @group Authentication
 * @param {Auditor.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Signup success
 * @returns {String} 500 - An error message
 */
router.post('/signup', AuditorController.signUp);

/**
 * Login to the application as an auditor
 * @route POST /login
 * @summary Response with login success
 * @group Authentication
 * @param {Auditor.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Login success
 * @returns {String} 500 - An error message
 */
router.post('/login', AuditorController.logIn);

/**
 * Return current auditor profile
 * @route GET /profile
 * @summary Response with profile of current user
 * @group Authentication
 * @return {String} 200 - Get auditor with success
 * @returns {String} 500 - An error message
 */
router.get('/profile', checkJwt, AuditorController.getProfile);

/**
 * Logging out of the application
 * @route POST /logout
 * @summary Response with logout success
 * @group Authentication
 * @return {String} 200 - Logout success
 * @returns {String} 500 - An error message
 */
router.post('/logout', checkJwt, AuditorController.logOut);

module.exports = router;