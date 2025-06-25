const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
);

module.exports = router;
