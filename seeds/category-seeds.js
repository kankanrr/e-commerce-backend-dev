const { Category } = require ('../models');

const categoryData = [
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'Software',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Hats',
    },
    {
        category_name: 'Toys',
    }
];

const seedCategories = () => Category.bulkCreate (categoryData);

module.exports = seedCategories;