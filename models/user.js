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
      
    });
    return User;
  };
  
