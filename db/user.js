const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL);

const User = connection.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.belongsTo(User, { as: 'manager' });

const syncAndSeed = () => {
  connection.sync({ force: true }).then(() => {
    return Promise.all([
      User.create({ name: 'James' }),
      User.create({ name: 'Harry', managerId: 1 }),
      User.create({ name: 'Frank', managerId: 1 }),
    ]);
  });
};

module.exports = {
  syncAndSeed,
  models: {
    User,
  },
};
