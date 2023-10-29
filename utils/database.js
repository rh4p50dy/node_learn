const mongodb = require("mongodb")
const mongodbClient = mongodb.MongoClient
const dotenv = require("dotenv").config()

let db;
const connect = ()=>{
    mongodbClient.connect(process.env.MONGODB_URL)
    .then(res => {

    })
    .catch(err=>{
        console.log(err)
    })
}
