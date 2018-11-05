'use strict';

const { Grade } = require('../database/index');

exports.getAll = function(req, res){
  let where = { where: { book_fk: req.params.id } };
  Grade.findAll(where)
    .then(data => {
      res.send(data);
    });
};
