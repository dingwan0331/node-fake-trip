const { myDataSource } = require("../config/mysql");

const getProduct = async (productId) =>{
    return await myDataSource.query(
        `SELECT products.id, 
        products.name, 
        products.grade,
        products.address, 
        products.check_in, 
        products.check_out,
        products.latitude, 
        products.longtitude,
        MIN(rooms.price) AS price,
        AVG(products.rating) AS rating, 
        SUM(reviews.id) AS review_count FROM products 
        LEFT OUTER JOIN reviews ON products.id = reviews.product_id
        where product_id = ${productId}`
    )
}

module.exports = { getProduct }