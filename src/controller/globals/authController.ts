/*
register/signup
incoming data--> username,email,password
processing/checking-->email valid,compulsory data aaunu paryo

login/signin
logout
fotgot password
reset password/otp
*/

/*exports registerUser = (req,res)=>{
}

exports.loginUser = ()=>{

}
class AuthController{
    static async registerUser(){

    }
   static async loginUser(){

    }
}
module.exports = AuthController*/
import { Request,Response } from "express"
import User from "../../database/models/user.model"
//json data-->req.body//username,email,password
//files-->req.file//files

const registerUser = async(req:Request,res:Response)=>{
//const username = req.body.username
//const password = req.body.password
//const email = req.body.email
const {username,password,email} =req.body
if (!username|| !password||!email){
    res.status(400).json({
        message : "Please provide username,password,email"
    })
    return
}
    //insert user table
   await User.create({
        username : username,
        password : password,
        email : email
        
    })
    res.status(200).json({
        message: "User register successfully"
    })
}
export {registerUser}

