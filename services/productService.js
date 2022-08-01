const { getProduct } = require('../models/productDao')
const { CreateError } = require('../util/exceptions')

const productDetail = async (productId) =>{
    const row = await getProduct(productId)
}

module.exports = { productDetail }