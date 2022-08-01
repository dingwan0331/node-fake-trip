const { getProduct } = require('../models/productDao')
const { CreateError } = require('../util/exceptions')

const productDetail = async (productId) =>{
    console.log(await getProduct(productId))
}

module.exports = { productDetail }