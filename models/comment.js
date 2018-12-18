module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Comment.associate = function (models) {
        // We're saying that a Comment should belong to a Post
        // A Post can't be created without a User due to the foreign key constraint
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Comment;
};