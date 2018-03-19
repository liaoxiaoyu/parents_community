/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'user'
  });
};
