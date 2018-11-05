'use strict';

module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    value: DataTypes.INTEGER
  });

  Grade.associate = (models) => {
    Grade.belongsTo(models.Book, {
      foreignKey: 'book_fk'
    });
    Grade.belongsTo(models.User, {
      foreignKey: 'user_fk'
    });
  };
  return Grade;
};