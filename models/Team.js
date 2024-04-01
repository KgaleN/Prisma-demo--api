const { DataTypes, Sequelize } = require('sequelize');
const Config = require('../config/config');
const sequelize = new Sequelize(Config.development);

module.exports = sequelize.define('Team', {
  TeamId: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },

  Name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  Nickname: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  HeadCoach: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  StadiumName: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  City: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  LogoImg: {
    type: DataTypes.BLOB,
    allowNull: true
  }
},
  {
    sequelize,
    tableName: 'team',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__team__39140776EAE8EAC3",
        unique: true,
        fields: [
          { name: "TeamId" },
        ]
      },
    ]
  }
);