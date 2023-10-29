const express = require('express');
const path = require('path');
const postController = require('./controllers/posts')
const postRouter = require('./routes/post')
const {adminRouter} = require('./routes/admin');
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const bodyParser = require('body-parser');

const app = express();

//view-engine
app.set('view engine','ejs')
app.set('views','views')


//file path ကိုဖွင့်ပေးတာ
app.use(
    express.static(path.join(__dirname,'public'))
)

//req.body မှာပါလာတဲ့ data ကိုပြလို့ရအောင်လုပ်ပေးတာ 
app.use(
    bodyParser.urlencoded({extended : false})
)

app.use('/post',postRouter)
app.use('/admin',adminRouter)


app.get('/',postController.renderPostPage)


mongoose.connect(process.env.MONGODB_URL)
    .then(_ => {
        console.log("DB Connected")
        app.listen(8002,()=>{
            console.log("Server is Listeing on port 8002..")
        })
    })
    .catch(e => console.log(e))
