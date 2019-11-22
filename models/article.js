module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    user_liked: DataTypes.STRING,
    comments: DataTypes.STRING
  });
  return Article;
};
