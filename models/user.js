module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: { 
        type: DataTypes.STRING,
        required: true
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      logged_in: DataTypes.BOOLEAN,
      logged_in_hash: DataTypes.STRING
    });
    return User;
  };
  