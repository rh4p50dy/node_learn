const mongodb = require("mongodb")
const mongodbClient = mongodb.MongoClient
const dotenv = require("dotenv").config()

const connect = ()=>{
    mongodbClient.connect(process.env.MONGODB_URL).then()
}
