const userModel = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt =  require('jsonwebtoken')

const logIn = async (req, res) =>{
    
    try {
        const user = await userModel.findOne({ email: req.body.email });
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        const payload = {
            role: user.role,
            id: user._id
        }

        if(!validPassword)
            res.status(400).json("wrong password")
        else{
            const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN)
            res.json({token: 'Bearer ' + accessToken,})
        }       
      } catch (err) {
        res.status(500).json(err)
    }
}

const register = async (req, res)=>{
        const salt = await bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(req.body.password, salt)
        const userRegister = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hassedPassword,
            company: req.body.company,
            role: req.body.role
    })
    userRegister.save()
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(500).json(err)
    })}
    
    const protectedRoute = (req, res)=>{
        return res.status(200).send({
            user: req.user.role
        })
    }

module.exports = { logIn, register, protectedRoute}