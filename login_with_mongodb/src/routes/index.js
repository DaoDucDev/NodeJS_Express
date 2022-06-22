import productsRounter from './products.js';

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    app.use('/products', productsRounter)
}
export default route;