const {DataTypes,Sequelize} = require('sequelize');
const Config = require('../config/config');
 const sequelize =new Sequelize(Config.development);
 
module.exports =  sequelize.define('Game', {

    GameId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    Date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },

      Time: {
        type: DataTypes.TIME,
        allowNull: true
      },

      Location: {
        type: DataTypes.STRING(255),
        allowNull: true
      },

      SeasonId: {
        type: DataTypes.STRING(350),
        allowNull: true,
        references: {
          model: 'season',
          key: 'SeasonId'
        }
      },

      EmpId: {
        type: DataTypes.STRING(350),
        allowNull: true,
        references: {
          model: 'employee',
          key: 'EmpId'
        }
      }
     
    

}
, {
  sequelize,
  tableName: 'game',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK__game__39140776EAE8EAC3",
      unique: true,
      fields: [
        { name: "GameId" },
      ]
    },
  ]
}

);