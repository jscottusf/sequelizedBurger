module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    // Burger.associate = function(models) {
    //     Burger.belongsTo(models.Menu, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    
    return Burger;
}