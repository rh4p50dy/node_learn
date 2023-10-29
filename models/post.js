const { getDatabase } = require("./../utils/database");

class Post{
    constructor(title,imgURL,description){
        this.title = title;
        this.imgURL = imgURL
        this.content = description
    }

    create(){
        const db = getDatabase()
        return db.collection("posts").insertOne(this).then(result => console.log(result)).catch(err=>console.log(err))
    }

    static getPost(){
        const db = getDatabase()
        return db
        .collection("posts")
        .find()
        .toArray()
        .then(res => {
            console.log(res)
            return res
        })
        .catch(e => console.log(e))
    }

}

module.exports = Post