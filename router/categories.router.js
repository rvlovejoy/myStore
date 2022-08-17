const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('New rote working fine');
});


router.get('/:categoryId/products/productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId,
  });
})

module.exports = router;
