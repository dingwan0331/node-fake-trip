const { getUser, createUser, updateUser } = require('../models/userDao')
const { CreateError } = require('../util/exceptions')
const { KakaoLogin }  = require('../util/kakaoApi')

const signUp = async (req)=>{
    const token     = req.headers.authorization
    const kakaoData = await new KakaoLogin(token).getUserData()

    const userData = {
        kakaoPk     : kakaoData.id,
        name        : kakaoData.properties.nickname,
        email       : kakaoData.kakao_account.email
    }

    if (!userData.kakaoPk || !userData.name || !userData.email){
        throw new CreateError('kakao')
    }

    const userRow = await getUser(userData.kakaoPk)

    if(userRow.length && userData.name != userRow.name && userData.email != userRow.email){
        await updateUser(userData); return 'Success' 
    }else if(userRow.length){return 'Success'}

    await createUser(userData); return 'Create'
}

module.exports = {signUp}