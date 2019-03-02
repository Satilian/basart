'use strict'
module.exports = (sequelize, DataTypes) => {
  var Page = sequelize.define('page', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    parent: DataTypes.INTEGER,
    view: DataTypes.STRING,
    uri: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
      set(val) {
        this.setDataValue('title', val)
        this.setDataValue('uri', val.toLowerCase().replace(/[\/\\\?\&\s]+/g,"-"))
      }
    },
    keywords: DataTypes.STRING(511),
    description: DataTypes.STRING(511),
    mods: {
      type: DataTypes.STRING,
      get() {
        try {return JSON.parse(this.getDataValue('mods'))} 
        catch (err) {}
      },
      set(val) {
        return this.setDataValue('mods', JSON.stringify(val))
      }
    }
  }, {})
  Page.associate = models => {
    let { lot, auction, page } = models
    page.hasOne(lot, { foreignKey: 'id' })
    page.hasOne(auction, { foreignKey: 'id' })
  }
  return Page
}