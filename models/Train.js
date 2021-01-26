module.exports = function (sequelize, DataTypes) {
  const Train = sequelize.define("Train", {
    name: DataTypes.STRING,
    numCarS: DataTypes.INTEGER,
    engineColor: DataTypes.STRING,
  });
  return Train;
};
