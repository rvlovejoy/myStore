const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();


//Get//
router.get('/', async (req, res) => {
    const products = await service.find();
      res.json(products);
});


//End espefic tiene que ir antes de dinamicos//
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
//Post//

router.post('/', async (req, res) => {
  const body =req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
});

//patch//

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product);
  } catch (error) {
    next(error)
  }
});

//delete//

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta);
});

module.exports = router;
