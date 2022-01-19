const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

// GET /api/tags/
router.get('/', async (req, res) => {
  try {
    const dbTagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });
    res.json(dbTagData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET /api/tags/1
router.get('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product, through: ProductTag }]
    });
    !dbTagData
      ? res.status(404).json({ message: 'Tag not found' })
      : res.json(dbTagData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// POST /api/tags
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const dbTagData = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.json(dbTagData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// PUT /api/tags/1
router.put('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    !dbTagData
      ? res.status(404).json({ message: 'Tag not found' })
      : res.json(dbTagData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// DELETE /api/tags/1
router.delete('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.destroy({ where: { id: req.params.id } });
    !dbTagData
      ? res.status(404).json({ message: 'Tag not found' })
      : res.json(dbTagData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
