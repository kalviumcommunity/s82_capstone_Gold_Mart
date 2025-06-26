const express = require('express');
const passport = require('passport');
require('./passport-setup');

const app = express();

app.use(require('express-session')({ secret: 'key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.send('Logged in successfully with Google');
  });

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
