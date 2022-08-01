const productService   = require('../services/productService')

const a = async (req, res) => {
    const productId = req.params.id
    await productService.productDetail(productId)

    res.send(200)
}

module.exports = {a}