'use strict'
module.exports = (sequelize, DataTypes) => {
  var Auction = sequelize.define('auction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    num: DataTypes.INTEGER,
    date: {
      type: DataTypes.DATE,
      get: function() {
        try {
          let date = this.getDataValue('date')
          let mont = date.getMonth() + 1
          let day = date.getDate()
          if(mont < 10) mont = `0${mont}`
          if(day < 10) day = `0${day}`
          return `${date.getFullYear()}-${mont}-${day}`
        } catch(err) {}
      }
    }
  }, {
  getterMethods: {
    formatedDate() {
      try {
        var date = this.getDataValue('date')
        var months = [
          'Января','Февраля','Марта','Апреля','Мая','Июня',
          'Июля','Августа','Сентября','Октября','Ноября','Декабря'
        ]
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
      } catch(err) {}
    }
  },
})
  Auction.associate = models => {
    models.auction.belongsTo(models.page, { foreignKey: 'id' })
  }
  return Auction
}