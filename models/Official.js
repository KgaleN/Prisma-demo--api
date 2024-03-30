const {DataTypes,Sequelize} = require('sequelize');
const Config = require('../config/config');
 const sequelize =new Sequelize(Config.development);
 
module.exports =  sequelize.define('Offical', {

    officialId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    FullName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },

      Active: {
        type: DataTypes.STRING(3),
        allowNull: true,
      }
     
    

}
, {
  sequelize,
  tableName: 'official',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK__official__39140776EAE8EAC3",
      unique: true,
      fields: [
        { name: "OfficialId" },
      ]
    },
  ]
}

);