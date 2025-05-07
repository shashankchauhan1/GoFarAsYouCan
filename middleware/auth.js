const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from cookie
  const token = req.cookies.token;

  // Check if token exists
  if (!token) {
    return res.redirect('/');
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user id to request
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.clearCookie('token');
    return res.redirect('/');
  }
};

module.exports = authMiddleware;