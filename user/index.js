const db = require('../models')

module.exports = (req, res, next) => {
	if(req.session.user) {
		db.user.findOne({ where: { mail: req.session.user }})
		.then(user => {
			req.user = user
			next()
		})
	} else {
		req.user = null
		next()
	}
}