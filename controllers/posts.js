const Post = require('./../models/post');

const posts = [];

exports.createPost = (req,res)=>{
    const {title,img,description} = req.body;
    const post = new Post(title,img,description);
    post
        .create()
        .then(res => console.log(res))
        .catch(e=>console.log(e));
    // console.log(`The tile is ${title} & body is ${description}.`)
    // posts.push(
    //     {id: Math.random(),title,img,description}
    // )
    res.redirect('/')

}

exports.renderAddPostPage = (req,res)=>{
    // res.sendFile('./views/add-post.html',{root : `${__dirname}/../`});
    res.render("add-post")
}

exports.renderPostPage = (req,res)=>{
    Post.getPost().then(posts => res.render('home',{title : "Hello World",posts}) ).catch(e => console.log(e))
}

exports.renderDetailPage = (req,res)=>{
    Post.getPost().then(posts => {
        let post = posts.find(post => post.id == req.params.postID)
        console.log(post)
        // res.render("detail",{title : "Post Details Page",post})
    })
}