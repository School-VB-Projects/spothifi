const express = require('express');
const router = express.Router();

const AuditorController = require('../controllers/AuthController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Response with 'Signup success'
 * @route POST /signup
 * @summary Registration to the application as an auditor
 * @group Authentication
 * @param {Auditor.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Signup success
 * @returns {String} 500 - An error message
 */
router.post('/signup', AuditorController.signUp);

/**
 * Response with 'Login success'
 * @route POST /login
 * @summary Login to the application as an auditor
 * @group Authentication
 * @param {Auditor.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Login success
 * @returns {String} 500 - An error message
 */
router.post('/login', AuditorController.logIn);

/**
 * Response with profile of current user
 * @route GET /profile
 * @summary Return current auditor profile
 * @group Authentication
 * @return {String} 200 - Get auditor with success
 * @returns {String} 500 - An error message
 */
router.get('/profile', checkJwt, AuditorController.getProfile);

/**
 * Response with 'Logout success'
 * @route POST /logout
 * @summary Logging out of the application
 * @group Authentication
 * @return {String} 200 - Logout success
 * @returns {String} 500 - An error message
 */
router.post('/logout', checkJwt, AuditorController.logOut);

module.exports = router;