const express = require('express');
const cors = require('cors')
const routerApi = require('./router');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')

const app = express ();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000','http://localhost:8080', 'http://localhost:5000']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('Not allowed'))
    }
  }
}
app.use(cors());

app.listen(port, () => {
  console.log('My port' + port);
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
