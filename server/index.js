const express = require("express");
const app = express()
const db = require("./models/db");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

const commentRouter = require("./router/commentRouter");
const userRouter = require("./router/userRouter");
const searchRouter = require("./router/searchRouter");
const userDetailRouter = require("./router/userDetailRouter");

const auth = require("./middlewares/auth");

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(express.json())
app.use(cookieParser());

db.connect((err) => {
    if(err){
      console.log("no!!🤕")
    }else{
      console.log("db is connected to MYSQL!!")
    }
})

app.use(auth)

app.use('/api/comments/', commentRouter);
app.use('/api/info/', userDetailRouter);
app.use('/api/user/', userRouter);
app.use('/api/search', searchRouter); 


app.listen(7000, () => console.log(`app is listening on 7000`))

