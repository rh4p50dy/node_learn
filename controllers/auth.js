exports.renderLoginPage = (req,res)=>{
    if(!req.cookies.isLogin)
        res.render('login',{title: "Login Page",isLogin : req.cookies.isLogin})
    else res.redirect('/')
}
exports.checkAuth = (req,res)=>{
    req.session.isLogin = true;
    res.redirect('/')
}

exports.logOut = (req,res)=>{
    req.session.destroy()
    res.redirect('/')
}