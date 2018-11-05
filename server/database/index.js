'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  });
  
  const db = {
    Book: sequelize.import('./models/book'),
    Comment: sequelize.import('./models/comment'),
    Grade: sequelize.import('./models/grade'),
    User: sequelize.import('./models/user')
  };

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});
  
  db.sequelize = sequelize;
  db.Sequelize = sequelize;
  module.exports = db;
  