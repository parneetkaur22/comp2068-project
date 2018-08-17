var express = require('express')
var router = express.Router()

// create a link to our drink model
var bookController = require('../controllers/bookController')

router.get('/', bookController.index)
router.get('/new', bookController.new)
router.get('/:id', bookController.show)
router.get('/:id/edit', bookController.edit)

router.post('/', bookController.create)
router.post('/:id/edit', bookController.update)
router.post('/:id/delete', bookController.delete)

// makes our file public to the application
module.exports = router;