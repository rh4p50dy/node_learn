const express = require('express');
const path = require('path');
const postController = require('./controllers/posts')
const postRouter = require('./routes/post')
const {connect} = require('./utils/database')
const {adminRouter,posts} = require('./routes/admin');
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


connect()
app.listen(8001,()=>{
    console.log("Server is Listeing on port 8001..")
})