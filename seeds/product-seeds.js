const { Product } = require('../models');

const productData = [
    {
        product_name: 'Palm Angels T-Shirt',
        price: 35.00,
        stock: 40,
        category_id: 1,
      },
      {
        product_name: 'Video Game',
        price: 60.00,
        stock: 50,
        category_id: 5,
      },
      {
        product_name: 'Cool Bucket Hat',
        price: 12.99,
        stock: 25,
        category_id: 4,
      },
      {
        product_name: 'KanKan: #RR the album',
        price: 9.99,
        stock: 15,
        category_id: 3,
      },
      {
        product_name: 'Kamen Rider SH Figuarts',
        price: 29.99,
        stock: 25,
        category_id: 2,
      },
];

const  seedProducts = () => Product.bulkCreate (productData);

module.exports = seedProducts;