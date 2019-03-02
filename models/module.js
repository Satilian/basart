'use strict'
module.exports = (sequelize, DataTypes) => {
  var Module = sequelize.define('module', {
    view: DataTypes.STRING,
    title: DataTypes.STRING,
    data: {
      type: DataTypes.TEXT,
      get() {
        try {return JSON.parse(this.getDataValue('data'))} 
        catch (err) { console.log(err)}
      },
      set(val) {
        return this.setDataValue('data', JSON.stringify(val))
      }
    }
  }, {})

  return Module
}