const { DataTypes, Sequelize } = require('sequelize');
const Config = require('../config/config');
const sequelize = new Sequelize(Config.development);

module.exports = sequelize.define('Season', {
  SeasonId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true
  },

  StartingDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },

  EndingDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    unique: true
  }
},
  {
    sequelize,
    tableName: 'season',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__season__39140776EAE8EAC3",
        unique: true,
        fields: [
          { name: "SeasonId" },
        ]
      },
    ]
  }
);