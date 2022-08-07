const userService   = require('../services/userService')
const { CreateError } = require('../util/exceptions')

module.exports = {
    signUp : async (req, res) => {
        try{
            if (!req.headers.authorization) { throw new CreateError('token') }

            const serviceToken = await userService.signUp(req)

            return res.header('Authorization', serviceToken).status(200).json({message : 'Success'})

        }catch(err){
            res.status(err.statusCode || 500).json({'message' : err.message} ) }
    }
}