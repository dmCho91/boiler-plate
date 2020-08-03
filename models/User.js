const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // trim: 공백 제거
        unique : 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type : String,
        maxlength: 50
    },
    role: { // 권한
        type: Number,
        default: 0
    }, 
    image: String,
    token: { // token -> 유효성검사
        type: String 
    },
    tokenExp : { // 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}