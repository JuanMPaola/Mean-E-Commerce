const { route } = require('../api');

const router = require('express').Router();

const Product = require('../../models/product.model')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)

    } catch (error) {
        res.json({error: error.message });
    }
});

router.get('/:productId',async (req, res) => {
    try {
        const {productId} = req.params;

        const product = await Product.findById(productId);
        res.json(product);

    } catch (error) {
        res.json({error: error.message})
    }

});

module.exports = router;