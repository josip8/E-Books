'use strict';

const { Comment } = require('../database/index');
const { User } = require('../database/index');

exports.getAll = function(req, res){
  let where = { where: { book_fk: req.params.id } };
  Comment.findAll(where)
    .then(data => {
      let promises = data.map(comment => {
        return User.findById(comment.user_fk)
          .then(user => {
            comment.dataValues.username = user.username;
            return comment;
          });
      });
      Promise.all(promises).then(promises =>{
        res.send(promises);
      });
    });
};

exports.postNew = function(req, res){
  Comment.create({
    text: req.body.text,
    book_fk: req.body.bookID,
    user_fk: req.body.userID
  })
    .then(data => {
      res.send('Comment created');
    });
};

exports.deleteComment = function(req, res){
  let where = { where: { id: req.body.id }};
  Comment.destroy(where)
    .then(data => {
      res.send('Comment deleted');
    });
};
