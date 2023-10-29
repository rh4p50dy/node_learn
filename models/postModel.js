const { getDB } = require("../utils/database")

class Post{
    constructor(title,img,content){
        this.title = title
        this.img = img
        this.content = content
    }
    create(){
        const db = getDB();
        return db.collection("posts")
                .insertOne(this)
                .then(res => {
                    console.log(res)
                })
                .catch(e => console.log(e))
    }

    static getPost(){
        const db = getDB();
        return db.collection("posts")
                .find()
                .toArray()
                .then(res => {return res})
                .catch(e => console.log(e))
    }
}

module.exports = Post