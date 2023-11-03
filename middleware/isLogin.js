exports.isLogin = (req,res,next)=>{
    if(req.session.isLogin === undefined){
        res.status(304)
        res.redirect('/')
    }
    next()
}