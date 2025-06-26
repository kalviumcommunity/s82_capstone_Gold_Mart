const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

// Generate JWT
function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
}

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Replace with real authentication
  if (username === 'admin' && password === '1234') {
    res.send({ success: true });
  } else {
    res.status(401).send({ success: false });
  }
});

module.exports = { generateToken, authenticateToken };
