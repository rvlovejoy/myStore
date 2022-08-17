const express = require('express');
const routerApi = require('./router');

const { logErrors, errorHandler } =require('./middleware/error.handler')

const app = express ();
const port = 3000;

app.listen(port, () => {
  console.log('My port' + port);
});

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
