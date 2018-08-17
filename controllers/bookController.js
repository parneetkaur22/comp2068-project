var Book = require( '../models/book' )
// our index function
exports.index = function( req, res, next ) {
  // create our locals parameter
  locals = {
    title: 'Book List'
  }
  Book.find().then( function (books) {
    // add the book to our locals
    locals.books = books
    // render our view
    res.render( 'books/index', locals )
  }).catch(err => next(err))
}

exports.show = (req, res, next) => {
  let locals = {
    title: 'Book Details'
  }

  Book.findById(req.params.id).then(book => {
    locals.book = book

    res.render('books/show', locals)
  }).catch(err => next(err))
}

exports.new = (req, res) => {
  let locals = {
    title: 'New Book'
  }

  res.render('books/new', locals)
}

exports.edit = (req, res, next) => {
  let locals = {
    title: 'Edit Book'
  }

  Book.findById(req.params.id).then(book => {
    locals.book = book

    res.render('books/edit', locals)
  }).catch(err => next(err))
}

exports.create = (req, res, next) => {
  Book.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  }).then(book => {
    res.redirect('/books/' + book._id)
  })
  .catch(err => next(err))
}

exports.update = (req, res, next) => {
  Book.findById(req.params.id).then(book => {
    book.name = req.body.name
    book.description = req.body.description
    book.price = req.body.price

    book.save().then(book => {
      res.redirect('/books/' + book._id)
    }).catch(err => next(err))
  })
  .catch(err => next(err))
}

exports.delete = (req, res, next) => {
  Book.remove({ _id: req.params.id }).then(() => {
    res.redirect('/books')
  }).catch(err => next(err))
}
