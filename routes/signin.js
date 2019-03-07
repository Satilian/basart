const router = require('express').Router()
const db = require('../models')

router.post('/signin', (req, res) => {
	db.user.findOne({ where: req.body })
	.then(user => {
		if(user) {
			req.session.user = user.mail
			res.json({signin: true})
		} else res.json({signin: false})
	})
})

router.post('/signup', (req, res) => {
	db.user.findOrCreate({ where: {mail: req.body.mail}, defaults: req.body})
	.spread((item, created) => {
		req.session.user = req.body.mail
	res.json({created})
  })
})

/*router.get('/update', (req, res) => {
	db.page.findOne({where: {id: 127}, include: [{model: db.lot}]})
	.then(item => console.log(item))
	
	res.end()
})*/

module.exports = router