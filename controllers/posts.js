const posts = [];

exports.createPost = (req,res)=>{
    let {title,img,description} = req.body;
    console.log(`The tile is ${title} & body is ${description}.`)
    posts.push(
        {id: Math.random(),title,img,description}
    )
    res.redirect('/')
}

exports.renderAddPostPage = (req,res)=>{
    // res.sendFile('./views/add-post.html',{root : `${__dirname}/../`});
    res.render("add-post")
}

exports.renderPostPage = (req,res)=>{
    // res.sendFile('./views/home.html',{root : `${__dirname}`});
    res.render('home',{title : "Hello World",posts});
}

exports.renderDetailPage = (req,res)=>{
    let post = posts.find(post => post.id == req.params.postID)
    console.log(post)
    res.render("detail",{title : "Post Details Page",post})
}