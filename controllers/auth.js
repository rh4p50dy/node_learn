const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
//render Login Page
exports.renderLoginPage = (req,res)=>{
    if(!req.cookies.isLogin)
        res.render('auth/login',{title: "Login Page",isLogin : req.cookies.isLogin})
    else res.redirect('/')
}

//render Register Page
exports.renderRegisterPage = (req,res)=>{
    if(!req.cookies.isLogin)
        res.render('auth/register',{title: "Register Page",isLogin : req.cookies.isLogin})
    else res.redirect('/')
}

//Handle Login
exports.loginHandler = (req,res)=>{
    const {email,password} = req.body
    UserModel.findOne({email})
        .then(user => {
            if(!user){
                return res.redirect('/login')
            }
            bcrypt.compare(password,user.password)
                .then(isMatch => {
                    if(isMatch){
                        req.session.isLogin = true
                        req.session.userinfo = user;
                        return req.session.save(e => {
                            res.redirect('/')
                            console.log(e)
                        })
                        
                    }
                    res.redirect("/login")
                })
                .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
}

//Handle Login
exports.registerHandler = (req,res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email,password})
        .then(res => {
            if(res){
                return res.redirect('/')
            }
            return bcrypt.hash(password,10)
        }).then(hashed => {
            return UserModel.create({
                email,
                password : hashed
            })
        })
        .then(_=> res.redirect("/login"))
        .catch(e => console.log(e))
    
}



//Logout User
exports.logOut = (req,res)=>{
    req.session.destroy()
    res.redirect('/')
}