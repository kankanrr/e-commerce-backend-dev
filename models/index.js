const Product = require ('./Product.js');
const Category = require ('./Category.js');
const Tag = require ('./Tag.js');
const ProductTag = require ('./ProductTag.js');

// one product belongs to
Product.belongsTo(Category, {
    foreignKey: "category_id"
});

// multiple cats
Category.hasMany(Product, {
    foreignKey: "category_id",
  });
  
  // one product belongs to many tags (attributes)
  Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: "product_id",
  });
  
  // tags belong to multiple products
  Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: "tag_id",
  });

  module.exports = { Product, Category, Tag, ProductTag };