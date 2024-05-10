const express=require("express");
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookieSession=require('cookie-session');
const passport=require('passport');
const authroutes=require('./routes/authRoutes');
const billingRoutes=require('./routes/billingRoutes');
require('./models/User');
require('./services/passport');
require('./models/Survey');
const surveyRoutes=require('./routes/surveyRoutes');
const bodyParser=require('body-parser');



mongoose.connect(keys.mongoURI);

const app=express();

app.use(bodyParser.json());
app.use(
    cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKeys]
}))

app.use(passport.initialize());
app.use(passport.session());


authroutes(app);

billingRoutes(app);

surveyRoutes(app);

if(process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Listening to port 5000...")
});