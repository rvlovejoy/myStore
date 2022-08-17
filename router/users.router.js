const express = require('express');

const router = express.Router();

//Users Next router to work on//

router.get ('/', (req, res) => {
  const { limit, offset} = req.query
  if (limit && offset) {
      res.json({
          limit,
          offset
      });
  } else{ res.send('No paramers here')}
})


module.exports = router;
