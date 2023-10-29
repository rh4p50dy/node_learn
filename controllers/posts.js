const PostModel = require('../models/PostModel')

exports.createPost = (req,res)=>{
    const {title,img,description} = req.body;
    PostModel.create({title,description,img}).then(() => res.redirect('/')).catch(e => console.log(e))
}

exports.renderAddPostPage = (req,res)=>{
    // res.sendFile('./views/add-post.html',{root : `${__dirname}/../`});
    res.render("add-post")
}

exports.renderPostPage = (req,res)=>{
    PostModel.find().sort({title: -1}).then(posts => res.render('home',{title : "Hello World",posts}) ).catch(e => console.log(e))
}

exports.renderEditPage = (req,res)=>{
    PostModel.findById(req.params.postID)
    .then(post => {
        res.render("edit-post",{title : "Edit Page",post})
    })
    .catch(e => console.log(e))
}

exports.updatePost = (req,res)=>{
    const {id,title,img,description} = req.body
    PostModel.findById(id).then(res => {
        res.title = title
        res.img = img
        res.description = description
        return res.save()
    })
    .then(()=>{
        console.log("Updated");
        res.redirect('/')
    })
}

exports.deletePost = (req,res)=>{
    const {postID}  = req.params;
    PostModel.findByIdAndRemove(postID)
        .then(_=>{
            console.log("Deleted");
            res.redirect('/')
        })
        .catch(e => console.log(e))
}

exports.renderDetailPage = (req,res)=>{
    PostModel.findById(req.params.postID)
    .then(post => {
        res.render("detail",{title : "Post Details Page",post})
    })
    .catch(e => console.log(e))
}