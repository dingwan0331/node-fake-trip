const jwt = require('jsonwebtoken')

const { getOrCreateUser } = require('../models/userDao')
const { CreateError }     = require('../util/exceptions')
const { KakaoLogin }      = require('../util/kakaoApi')

const dotenv = require("dotenv")
dotenv.config()

const signUp = async (req)=>{
    const kakaoToken = req.headers.authorization
    const kakaoData  = await new KakaoLogin(kakaoToken).getUserData()

    const kakaoPk = kakaoData.id
    const name    = kakaoData.properties.nickname
    const email   = kakaoData.kakao_account.email
    
    const userId = await getOrCreateUser(kakaoPk,name,email)
    
    const payload      = {'userId' : userId}
    const secretKey    = process.env.SECRET_KEY
    const serviceToken = jwt.sign(payload, secretKey)
    
    return serviceToken
}

module.exports = {signUp}