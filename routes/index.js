const router = require('express').Router()
const db = require('../models')

router.get('/*', (req, res, next) => {
  var uri = req.params[0].split('/')[0]

  db.page.findOne({ where: { uri }, include: [{model: db.lot}]})
	.then(page => {
		if(page) loadData(page, req)
			.then(page => res.render(page.view, { ...page.dataValues }))
		else {console.log('not find'); next()}
	}).catch(err => next(err))
})

module.exports = router

const loadData = (page, req) => new Promise(resolve => {
	var data = page.dataValues

	loadModules(page)
	.then(() => {
		switch(page.view) {
			case 'category':
				db.page.findAll({ where: {view: 'category'} })
					.then(menu => { 
						menu = map(menu, 8)
						menu.forEach(row => {
							if(row.child) row.uri = row.child[0].uri
						})
						data.menu = menu 
					})
				db.page.findAll({
					where: {parent: page.id, view: 'lot'},
					include: [{model: db.lot}]
				}).then(items => {
					data.items = items
					resolve(page)
				})
				break

			case 'search':
				var mysql = require('mysql2')
				var search = mysql.createConnection({
				  host: 'localhost',
				  port: 9306
				})

				search.query(
				  `SELECT * FROM pages WHERE match('${req.query.match}')`,
				  (err, items) => {
				  	items.forEach(item => {
					  	try {item.image = JSON.parse(item.image)}
					  	catch(err) {}
				  	})
				    data.items = items
						resolve(page)
				  }
				)
				break

			default: 
				resolve(page)
				break
		}
	})

})

const loadModules = page => new Promise(resolve => {
	var where = { id: page.mods }
	db.module.findAll({ where }).then(mods => {
		mods.forEach(mod => page.dataValues[mod.view] = mod.data)
		resolve()
	})
})

const map = (rows, parent) => {
	var arr = []
	rows.forEach(row => { 
		if(row.parent == parent) {
			row.child = map(rows, row.id)
			arr.push(row)
		}
	})
	if(arr.length) return arr
}
