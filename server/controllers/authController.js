'use strict';

const { User } = require('../database/index');

exports.register = function(req, res){
  if(req.body.username===''){
    res.send('You need username for registration');
  }
  else{
    let where = { where: { username: req.body.username } };
    User.findOne(where)
      .then(data => {
        if(data === null){
          res.send('User registered');
          User.create({
            username: req.body.username,
            password: req.body.password
          });
        }
        else res.send('User already exists!');
      });
  }
};
    
exports.login = function(req, res){
  let where = { where: { username: req.body.username, password: req.body.password }};
  User.findOne(where)
    .then(data => {
      if(data === null){
        res.send('User not found');
      }
      else res.send(data);
    });
};
