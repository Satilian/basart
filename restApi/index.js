const db = require('../models') 

module.exports = (req, res, next) => {
	const { method, params, query, body } = req
	const { 0: table, 1: id} = params[0].split('/')
	if(!db[table]) next()
	
	switch(method) {
		case 'GET':
			var where = query.filter?JSON.parse(query.filter):{}
			var include = table == 'page'?[{model: db.lot}, {model: db.auction}]:[]
			db[table].findAll({ where, include })
			.then(items => res.json(items))
			.catch(err => console.log(err))
			break

		case 'POST':
			var where = body.title?{title: body.title}:{id: body.id} 
			db[table].findOrCreate({where, defaults: body})
			.spread((item, created) => {
				item.dataValues.created = created
		    res.json(item)
		   })
			break

		case 'PUT':
			db[table].update(body, { where: { id } })
			.then(() => res.end())
			.catch(err => res.status(205).end())
			break

		case 'DELETE':
			db[table].destroy({ where: { id }})
				.then(() => res.end())
				.catch(err => res.status(501).end())
			break

		default: 
			res.end()
			break
	}
}
