const jwt = require('jsonwebtoken');
const { createUser, authUser, getUserByID } = require('../models/query');

module.exports = {
	signup: async function(req, res, next) {
		try {
			const user = await createUser(req.body);
			if (user.length > 0) {
				const [{ employee_id, email, user_name, first_name }] = user;
				const token = jwt.sign({ employee_id, email, user_name, first_name }, process.env.SECRET_KEY);
				return res.status(200).json({ employee_id, email, user_name, first_name, token });
			} else {
				return next({ status: 400, message: 'Something went wrong with the server.' });
			}
		} catch (err) {
			next(err);
		}
	},
	signin: async function(req, res, next) {
		try {
			const user = await authUser(req.body);
			if (user.length > 0) {
				const [{ employee_id, email, user_name, first_name }] = user;
				const token = jwt.sign({ employee_id, email, user_name, first_name }, process.env.SECRET_KEY);
				return res.status(200).json({ employee_id, email, user_name, first_name, token });
			} else {
				return next({ status: 400, message: 'Invalid Email/Password' });
			}
		} catch (err) {
			next(err);
		}
	},
	getUser: async function(req, res, next) {
		try {
			const [{ employee_id, first_name, last_name, email, user_name }] = await getUserByID(req.user.employee_id);
			return res.status(200).json({ employee_id, first_name, last_name, email, user_name });
		} catch (err) {
			next(err);
		}
	}
};
