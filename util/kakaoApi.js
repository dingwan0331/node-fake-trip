const axios           = require('axios')
const { CreateError } = require('./exceptions')

class KakaoLogin {
    constructor(token){
        this.END_POINT = "https://kapi.kakao.com/v2/user/me"
        this.token     = token
    }

    async getUserData(){
        const headers = { headers : {Authorization : `Bearer ${this.token}`} }
        let userData  = {}

        await axios.get(this.END_POINT,headers).then(res => {userData = res.data}
        ).catch(err => {
            const errData = err.response.data 
            if(errData.code == -1){ throw new CreateError('kakao') }
            if(errData.code <= 0){ throw new CreateError('token') }
            }
        )
        return userData
        }
    }

module.exports = {KakaoLogin}