const router = require('express').Router()
const restApi = require('../restApi')

router.get('/', (req, res) => {
	if(req.user) {
		if(req.user.status == 2)
			res.render('admin', { title: 'Админпанель' })
		else res.redirect('/')
	} else res.redirect('/вход')
})

router.all('/*', (req, res, next) => {
	if(req.user && req.user.status == 2) restApi(req, res, next)
	else res.end()
})

module.exports = router