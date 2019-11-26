const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: { 
        type: DataTypes.STRING,
        notNull: true,       
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true, 
        notNull: true,      
      },
      password: {
       type: DataTypes.STRING,
       notNull: true,       
       min: 8
      },
      
    }, {
      freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }

    });
    return User;
  };
  
