require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    isAuthenticated: function (req, res, next) {
        try {
            const token = req.header('x-auth-token');
            if (token) {
                const decoded = jwt.verify(token, process.env.SECRET_KEY);
                req.user = decoded;
                next();
            }
            return next({ status: 401, message: 'No Token, authorization needed' });
        } catch (err) {
            return next({ status: 401, message: 'Token is not Valid' });
        }
    }
};
