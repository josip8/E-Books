'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    summary: DataTypes.TEXT,
    genre: DataTypes.STRING,
    image_url: DataTypes.STRING
  });

  Book.associate = (models) => {
    Book.hasMany(models.Comment, {
      foreignKey: 'book_fk'
    });
    Book.hasMany(models.Grade, {
      foreignKey: 'book_fk'
    });
  };
  return Book;
};
