const mongoose = require('mongoose');
const {Schema} = mongoose;   // destructing

const userSchema=new Schema({
    googleId: String,
    credits: {
        type:Number,
        default:0
    }
});


mongoose.model('users', userSchema);


