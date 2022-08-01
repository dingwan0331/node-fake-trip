const { myDataSource } = require("../config/mysql");

const getProduct = () =>{
    myDataSource.query(
        `SELECT product.id, 
        product.name, 
        product.grade,
        product.address, 
        product.check_in, 
        product.check_out,
        product.latitude, 
        product.longtitude,
        MIN(rooms.price) AS price,
        AVG(product.rating) AS rating, 
        SUM(reviews.id) AS review_count FROM products where `
    )
}