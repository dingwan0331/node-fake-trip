const { myDataSource } = require("../config/mysql");
const { CreateError }  = require("../util/exceptions");

const getOrCreateUser = async (kakaoPk, name, email)=> {
    try{
        return await myDataSource.query(
            `INSERT INTO users(kakao_pk, name, email) VALUES(?,?,?) ON DUPLICATE KEY UPDATE name = ?, email = ?;`,
            [kakaoPk, name, email, name, email]
        )
    }catch(err){throw new CreateError('database')}
}
// const getOrCreate = async (kakaoPk, name, email)=> {
    // try{
        // await myDataSource.query(`START TRANSACTION;`)
        // await myDataSource.query(`INSERT INTO users (kakao_pk,name,email) values (?,?,?)`,[kakaoPk, name, email])
        // await myDataSource.query(`COMMIT;`)
    // }catch(err){try{
        // let a = []
        // await myDataSource.query('ROLLBACK;')
        // await myDataSource.query(`START TRANSACTION;`)
        // await myDataSource.query(`UPDATE users SET name="${name}", email="${email}" WHERE kakao_pk=${kakaoPk};`)
        // await myDataSource.query(`COMMIT;`)
        // return a}catch(err){console.log(err)}
    // }
// }

module.exports = {getOrCreateUser}