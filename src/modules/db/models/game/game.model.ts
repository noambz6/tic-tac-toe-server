export const game = (sequelize: any, Sequelize: any) => sequelize.define("game", {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        field: 'is_active',
        defaultValue: false
    }
}, {
    tableName: 'Games'
});