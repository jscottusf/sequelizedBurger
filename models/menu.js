module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define("Menu", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        burger_description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1, 300]
        },
        burger_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    
    return Menu;
}