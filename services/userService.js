const { getOrCreateUser } = require('../models/userDao')
const { CreateError } = require('../util/exceptions')
const { KakaoLogin }  = require('../util/kakaoApi')

const signUp = async (req)=>{
    const token     = req.headers.authorization
    const kakaoData = await new KakaoLogin(token).getUserData()

    const kakaoPk = kakaoData.id
    const name    = kakaoData.properties.nickname
    const email   = kakaoData.kakao_account.email

    const result = await getOrCreateUser(kakaoPk,name,email);

    if (result.insertId && result.affectedRows==1){return 'Create'}
    else{return 'Success'}
}

module.exports = {signUp}