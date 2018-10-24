import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const port = process.env.port || 4000; // port binding
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/api/v1/products', products);
// app.use('/api/v1/sales', sales);

//import routes into the application
// import {myApp} from './server/routes';
require('./server/routes')(app);

app.use('/api/v1/products', products);
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

export default app;
