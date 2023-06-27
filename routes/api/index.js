const router = require ('express').Router();
const categoryRoute = require ('./category-route.js');
const productRoute = require ('./product-route.js');
const tagRoute = require ('./tag-route.js');

router.use ('/categories', categoryRoute );
router.use ('/products', productRoute );
router.use ('/tags', tagRoute );

module.exports = router;