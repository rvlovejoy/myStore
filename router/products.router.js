const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();


//Get//
router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
      res.json(products);
  } catch (error) {
    next(error);
  }
})


//End espefic tiene que ir antes de dinamicos//
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id == '999'){
    res.status(404).json({
      message:'Not found'
    });
  }else{
    res.status(200).json({
        id,
        name: 'Product 1',
        price: 1000
    });
  }
})
//Post//

router.post('/', async (req, res) => {
  const body =req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
})

//patch//

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

//delete//

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta);
})

module.exports = router;
