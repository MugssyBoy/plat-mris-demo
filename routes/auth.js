const router = require('express').Router();
const { signup, signin, getUser } = require('../handler/auth');
const { isAuthenticated } = require('../middleware/auth');

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', isAuthenticated, getUser);

module.exports = router;
