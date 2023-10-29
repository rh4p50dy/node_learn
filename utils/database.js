const mongodb = require("mongodb")
const mongodbClient = mongodb.MongoClient
const dotenv = require("dotenv").config()

let db;
const connect = ()=>{
    mongodbClient.connect(process.env.MONGODB_URL)
    .then(res => {
        db = res.db()
        console.log("DB Connect")
    })
    .catch(err=>{
        console.log(err)
    })
}

const getDB = ()=>{
    if(db){return db}
    throw "DB Error"
}

module.exports = {connect,getDB}