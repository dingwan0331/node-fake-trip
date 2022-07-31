const userService   = require('../services/userService')
const { CreateError } = require('../util/exceptions')

module.exports = {
    signUp : async (req, res) => {
        try{
            if (!req.headers.authorization) { throw new CreateError('token') }

            const result = await userService.signUp(req)

            return res.status(result == 'Success' ? 200 : 201).json( {'message' : result} )
        }catch(err){
            res.status(err.statusCode || 500).json( {'message' : err.message} ) }
    }
}