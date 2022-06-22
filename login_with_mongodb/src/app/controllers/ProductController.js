class ProductController {
    index(req, res) {
        res.render('home');
    }
}

export default new ProductController;