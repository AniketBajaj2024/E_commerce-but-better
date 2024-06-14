const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');


const userSchema = new mangoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true
    },

    email :{
        tyoe : String,
        required : true,
        unique:true
    },

    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('User' , userSchema);