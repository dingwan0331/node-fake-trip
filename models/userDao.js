const { myDataSource } = require("../config/mysql");
const { CreateError }  = require("../util/exceptions");

const getOrCreateUser = async (kakaoPk, name, email) => {
    try{
        let row = await myDataSource.query(`SELECT * FROM users WHERE kakao_pk = ${kakaoPk}`)

        if(!row.length){
            row = await myDataSource.query(`INSERT INTO users (kakao_pk,name,email) values (?,?,?)`,
            [kakaoPk, name, email] )
            return row.insertId
        }

        if(!(name === row[0].name) || !(email === row[0].email) ){
            row = await myDataSource.query('UPDATE users SET name=?,email=?', [name, email] )
        }

        return row[0].id
        
    }catch(err){
        throw new CreateError('database')
    }
}

module.exports = {getOrCreateUser}