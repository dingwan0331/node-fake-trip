class CreateError extends Error{
    constructor(type){
        super(type)
        this.config = {
            'token'    : this.tokenError,
            'database' : this.databaseError,
            'kakao'    : this.kakaoError
        }
        this.config[type]()
        this.statusCode = this.config.statusCode
        this.message    = this.config.message
    }   

    tokenError(){
        this.statusCode = 401,
        this.message    = 'Invalid Token'
    }
    
    databaseError(){
        this.statusCode = 500,
        this.message    = 'Database Error'
    }

    kakaoError(){
        this.statusCode = 400,
        this.message    = 'Kakao Social Error'
    }
}

module.exports = { CreateError }