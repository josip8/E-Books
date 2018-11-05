'use strict';
const { Book } = require('../database/index');

exports.getAll = async function(req, res){
  Book.findAll()
    .then(data => {
      res.send(data);
    });
};

exports.addNew = async function(req, res){
  Book.create({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    genre: req.body.genre,
    image_url: './components/images/leather-book-preview.png'
  })
    .then(data => {
      res.send('Book added to database');
    })
    .catch(error => res.send('Book could not be added to database'));
};

exports.delete = async function(req, res){
  let where = { where: { id: req.body.id }};
  Book.destroy(where)
    .then(data => {
      res.send('Book deleted');
    });
};

exports.update = async function(req, res){
  Book.update({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    summary: req.body.summary
  },
  {where: {id: req.body.id}}
  )
    .then(data => res.send('Book updated'))
    .catch(error => res.send('Book not updated!'));
};
