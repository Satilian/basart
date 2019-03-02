'use strict'
module.exports = (sequelize, DataTypes) => {
  var Lot = sequelize.define('lot', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    auc: DataTypes.INTEGER,
    lot: DataTypes.INTEGER,
    avtor: DataTypes.STRING,
    technika: DataTypes.STRING,
    image: {
      type: DataTypes.TEXT,
      get() {
        try {return JSON.parse(this.getDataValue('image'))} 
        catch (err) {}
      },
      set(val) {
        return this.setDataValue('image', JSON.stringify(val))
      }
    },
    year: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING
  }, {})
  Lot.associate = models => {
    models.lot.belongsTo(models.page, { foreignKey: 'id' })
  }
  return Lot
}