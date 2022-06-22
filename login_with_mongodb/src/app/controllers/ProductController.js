import Product from '../models/product.js'

class ProductController {
    index(req, res) {
        // res.json ({
        //     name: 'test'
        // })
        Product.find({}, function(err, products) {
            if (!err) {
                console.log(products);
                res.json(products)
            } else {
                res.status(400).json({
                    error: 'Lỗi cmnr!'
                })
            }
        })
        // res.render('home');
    }
}

export default new ProductController;