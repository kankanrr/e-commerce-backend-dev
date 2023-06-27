const router = require ('express') .Router();
const { Category, Product } = require ('../../models');

// using /api/categories

router.get("/", (req, res) => {
    // find cats
    Category.findAll({
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    })
      .then((dbCatData) => {
        if (!dbCatData) {
          res.status(404).json({ message: "No categories found" });
          return;
        }
        res.json(dbCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get("/:id", (req, res) => {
    // find by id
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    })
      .then((dbCatData) => {
        if (!dbCatData) {
          res.status(404).json({ message: "No category found" });
          return;
        }
        res.json(dbCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post("/", (req, res) => {
    // create new
    Category.create({
      category_name: req.body.category_name,
    })
      .then((dbCatData) => res.json(dbCatData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put("/:id", (req, res) => {
    // update a category
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbCatData) => {
        if (!dbCatData) {
          res.status(404).json({ message: "No category found." });
          return;
        }
        res.json(dbCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete("/:id", (req, res) => {
    // deletion
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbCatData) => {
        if (!dbCatData) {
          res.status(404).json({ message: "No category found." });
          return;
        }
        res.json(dbCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;