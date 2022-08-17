const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id == 10 ){
    res.json({
      id,
    })
  }
  else {res.send('Task not found')}
});

module.exports = router;
