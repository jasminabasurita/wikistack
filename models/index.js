const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack'); // xtra param => ', {logging: false}'
//db.sync({ force: true });

const User = db.define('user', {
  name: {type: Sequelize.STRING, isAlphanumeric: true, notEmpty: true, allowNull: false},
  email: {type: Sequelize.STRING, isEmail: true, allowNull: false}
});

const Page = db.define('page', {
  title: {type: Sequelize.STRING, allowNull: false},
  urlTitle: {type: Sequelize.STRING, isAlphanumeric: true, allowNull: false},
  content: {type: Sequelize.STRING, allowNull: false},
  status: Sequelize.ENUM('open', 'closed'),
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
  // status: Sequelize.BOOLEAN
}, {
  getterMethods: {
    route() {
      return '/wiki/' + this.getDataValue('urlTitle');
    }
  },

  hooks: {
    beforeValidate: (page) => {
      console.log(page);
      var urlTitle = page.title.split(' ')
      .join('_')
      .replace(/\W/g, 'x');
      page.urlTitle = urlTitle;
    }
  }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
};
