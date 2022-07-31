const { myDataSource } = require("../config/mysql");
const { CreateError }  = require("../util/exceptions");

const getUser = async (kakaoPk) => {
    try{
        return await myDataSource.query(
            `SELECT * FROM users WHERE kakao_pk = ${kakaoPk};`
        )
    }catch(err){throw new CreateError('database') }
}

const createUser = async (userData) => {
    try{
        const now = new Date().toISOString().replace('Z','')
        return await myDataSource.query(
            `INSERT INTO users (kakao_pk,name,email,created_at,updated_at) VALUES (?,?,?);`,
            [Object.values(userData),now,now]
        )
    }catch(err){throw new CreateError('database') }
}

const updateUser = async (userData) => {
    try{
        const now = new Date().toISOString().replace('Z','')
        return await myDataSource.query(
            `UPDATE users SET name = ?, email = ?,updated_at = ? WHERE kakao_pk = ?;`,
            [userData.name, userData.email, now, userData.kakaoPk]
        )
    }catch(err){throw new CreateError('database') }
}

module.exports = {getUser, createUser, updateUser}