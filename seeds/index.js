// mains vars
const seedCategories = require ('./category-seeds.js');
const seedProducts = require ('./product-seeds.js');
const seedTag = require ('./tag-seeds.js');
const seedProductTag = require ('./product-tag-seeds.js');

// sequelize
const sequelize = require ('../config/connection.js');

// seed process

const processSeeds = async () => {
    await sequelize.sync ({ force: true });
    console.log('database synced');
    await seedCategories();
    console.log('categories seeded');
    await seedProducts();
    console.log('products seeded');
    await seedTag();
    console.log('tags seeded');
    await seedProductTag();
    console.log('product tags seeded');
    process.exit(0);
};

// initialization

processSeeds();