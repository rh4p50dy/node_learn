const posts = [];

const Post = require('../models/postModel')


exports.createPost = (req,res)=>{
    let {title,img,description} = req.body;
    const PostModel = new Post(title,img,description);
    PostModel.create()
    res.redirect('/')
}

exports.renderAddPostPage = (req,res)=>{
    res.render("add-post")
}

exports.renderPostPage = (req,res)=>{
    Post.getPost().then(posts => res.render('home',{title : "Hello World",posts}))
}

exports.renderDetailPage = (req,res)=>{
    Post.getPost().then(posts => {
        let post = posts.find(post => post._id == req.params.postID)
        console.log(post)
        res.render("detail",{title : "Post Details Page",post})
    })
    
}