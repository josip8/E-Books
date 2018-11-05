'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Grade, {
      foreignKey: 'user_fk'
    });
    User.hasMany(models.Comment, {
      foreignKey: 'user_fk'
    });
  };
  return User;
};
