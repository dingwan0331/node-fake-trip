const userService   = require('../services/userService')
const { CreateError } = require('../util/exceptions')

module.exports = {
    signUp : async (req, res) => {
        try{
            if (!req.headers.authorization) { throw new CreateError('token') }

            const [result, serviceToken] = await userService.signUp(req)
            
            const status = result == 'Created' ? 201 : 200

            return res.header('Authorization', serviceToken).status(status).json({message : result})

        }catch(err){
            res.status(err.statusCode || 500).json({'message' : err.message} ) }
    }
}