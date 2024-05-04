const mongoose = require('mongoose');
const {Schema} = mongoose;   // destructing

const userSchema=new Schema({
    googleId: String
});


mongoose.model('users', userSchema);


