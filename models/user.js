'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    mail: DataTypes.STRING,
    pass: DataTypes.STRING,
    status: DataTypes.INTEGER(1),
  }, {})

  return User
}