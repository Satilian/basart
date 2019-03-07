const router = require('express').Router()
const fs = require('fs')
const fsPromises = require('fs').promises
const sharp = require('sharp')
const imgPath = '/home/max/basart/public/img'
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })

router.delete('/imgdir', (req, res) => {
	if(req.user && req.user.status == 2) {

		var path = `${imgPath}/lots/${req.query.id}`
		fsPromises.readdir(path)
		.then(files => files.map(file => `${path}/${file}`))
		.then(files => Promise.all(files.map(fsPromises.unlink) ))
		.then(() => fsPromises.rmdir(path))
		.then(() => res.send('Folder deleted!'))
		.catch(err => res.status(500).send(err))

	} else res.end()
}) 

router.post('/lot', upload.single('image'), (req, res) => {
	if(req.user && req.user.status == 2) {
		if (!req.file) res.status(400).send('No files were uploaded.')
    var image = sharp(req.file, { failOnError: false })
		var name = req.file.originalname
		var path = `${imgPath}/lots/${req.body.id}`
    if(!fs.existsSync(path)) fs.mkdirSync(path)

		fs.access(`${path}/${name}`, fs.constants.F_OK, err => { //Проверяет есть ли фаил 
			if(!err) res.status(208).end()
			else {
				image.toFile(`${path}/${name}`)
				image.resize(1200, 1200, { fit: "inside" })
		  	.toFile(`${path}/1200_${name}`)
		  	image.resize(300, 300, { fit: "inside" })
	  		.toFile(`${path}/300_${name}`)
	  		.then(info => res.send('File uploaded!'))
		  	.catch(err => res.status(500).send(err))
			}
		})
		
	} else res.end()
})

router.delete('/lot', (req, res) => {
	if(req.user && req.user.status == 2) {

		var name = req.query.name
		var path = `${imgPath}/lots/${req.query.id}`
		var files = [`${path}/${name}`,`${path}/1200_${name}`,`${path}/300_${name}`]

		Promise.all( files.map(fsPromises.unlink) )
	  .then(() => res.send('Files deleted!'))
	  .catch(err => res.status(500).send(err))

	} else res.end()
})

router.post('/module', (req, res) => {
	if(req.user && req.user.status == 2) {
		
		if (!req.files) return res.status(400).send('No files were uploaded.')
		var image = sharp(req.files.image.data)
		var name = req.files.image.name
		var path = `${imgPath}/module/${req.body.id}`
		if(!fs.existsSync(path)) fs.mkdirSync(path)

		fs.access(`${path}/${name}`, fs.constants.F_OK, err => { //Проверяет есть ли фаил
		  if(!err) res.status(208).end()
		  else { 														//Если файла нет
		  	image.toFile(`${path}/${name}`)
		  	new Promise(resolve => {
		  		switch (req.body.id) {
		  			case '1': image.resize(1200, 300)
		  				break
		  			case '3': image.resize(300, 300, { fit: "inside" })
		  				break
		  			default: image.resize(300, 300)
		  		}
		  		resolve()
		  	}).then(() => {
		  		image.jpeg({ quality: 50 })
			  	.toFile(`${path}/thumb_${name}`)
					.then(info => res.send('File uploaded!'))
			  	.catch(err => res.status(500).send(err))
		  	})
		  }
		})

	} else res.end()
})

router.delete('/module', (req, res) => {
	if(req.user && req.user.status == 2) {

		var name = req.query.name
		var path = `${imgPath}/module/${req.query.id}`
		var files = [`${path}/${name}`,`${path}/thumb_${name}`]

		Promise.all( files.map(fsPromises.unlink) )
	  .then(() => res.send('Files deleted!'))
	  .catch(err => res.status(500).send(err))

	} else res.end()
})

module.exports = router