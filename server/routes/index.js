import * as productsController from './products/products';
import salesController from './sales/sales';

module.exports = (app) => {
    app.get('/v1/products', productsController.list);
    app.get('/v1/products/:id', productsController.retrieve);
    app.get('/v1/sales', salesController.list);
    app.get('/v1/sales/:id', salesController.retrieve);
    app.post('/v1/products', productsController.create);
    app.post('/v1/sales', salesController.create);
}
