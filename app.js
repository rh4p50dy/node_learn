const express = require('express');
const path = require('path');
const session = require('express-session')
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const bodyParser = require('body-parser');
const MongoDBStore = require('connect-mongodb-session')(session)

const app = express();

const UserModel = require('./models/UserModel')

const store = new MongoDBStore({
    uri : process.env.MONGODB_URI,
    collection : "sessions"
})

const postController = require('./controllers/posts')
const postRouter = require('./routes/post')
const loginRouter = require('./routes/login')
const {adminRouter} = require('./routes/admin');
const cookieParser = require('cookie-parser');


//view-engine
app.set('view engine','ejs')
app.set('views','views')



app.use(session({
    secret : process.env.SECRECT_KEY,
    resave : false,
    saveUninitialized : false,
    cookie : {
        httpOnly : false
    },
    store
}))
//file path ကိုဖွင့်ပေးတာ
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended : false}))
app.use(cookieParser())

app.use('/post',postRouter)
app.use('/admin',adminRouter)
app.use(loginRouter)

app.get('/',postController.renderPostPage)


mongoose.connect(process.env.MONGODB_URL)
    .then(_ => {
        port = process.env.PORT || 8001
        console.log("DB Connected")
        app.listen(port,()=>{
            console.log(`Server is Listeing on port ${port}..`)
        })  
    })
    .catch(e => console.log(e))
