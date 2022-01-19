const router = require('express').Router();
const { Product, Category } = require('../../models');

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.json(dbCategoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET /api/categories/1
router.get('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }]
    });
    !dbCategoryData
      ? res.status(404).json({ message: 'Category not found' })
      : res.json(dbCategoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// POST /api/categories
router.post('/', async (req, res) => {
  try {
    const dbNewCategory = await Category.create({
      category_name: req.body.category_name
    });
    res.json(dbNewCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// PUT /api/categories/1
router.put('/:id', async (req, res) => {
  try {
    const dbUpdateCategory = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );
    !dbUpdateCategory
      ? res.status(404).json({ message: 'Category not found' })
      : res.json(dbUpdateCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// DELETE /api/categories/1
router.delete('/:id', async (req, res) => {
  try {
    const dbDeleteCategory = await Category.destroy({
      where: { id: req.params.id }
    });
    !dbDeleteCategory
      ? res.status(404).json({ message: 'Category not found' })
      : res.json(dbDeleteCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
