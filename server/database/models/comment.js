'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.TEXT
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Book, {
      foreignKey: 'book_fk'
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'user_fk'
    });
  };
  return Comment;
};
