const { myDataSource } = require("../config/mysql");
const { CreateError }  = require("../util/exceptions");

// const getOrCreateUser = async (kakaoPk, name, email)=> {
    // try{
        // const now = new Date().toISOString().replace('Z','')
        // return await myDataSource.query(
            // `INSERT INTO users(kakao_pk, name, email,created_at,updated_at) 
            // VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE 
            // name = ?, email = ?, updated_at = ?;
            // `,
            // [kakaoPk, name, email, now, now, name, email, now]
        // )
    // }catch(err){console.log(err);throw new CreateError('database')}
// }
const getOrCreateUser = async (kakaoPk, name, email) => {
    const now = new Date().toISOString().replace('Z','')
    try{
        await myDataSource.query(`START TRANSACTION;`)

        let row = await myDataSource.query(`SELECT * FROM users WHERE kakao_pk = ${kakaoPk}`)

        if(!row.length){
            row = await myDataSource.query(`INSERT INTO users (kakao_pk,name,email,created_at,updated_at) values (?,?,?,?,?)`,
            [kakaoPk, name, email, now, now] )
        }

        if(!(name === row[0].name) && !(email === row[0].email) ){
            row = await myDataSource.query('UPDATE users SET name=?,email=?,updated_at=?', [name, email, now] )
        }

        await myDataSource.query(`COMMIT;`); return row

    }catch(err){
        await myDataSource.query('ROLLBACK;') 
        throw new CreateError('database')
    }
}

module.exports = {getOrCreateUser}