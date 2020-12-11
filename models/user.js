const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, require: true},
    email: {type: String, required: true, unique: true},
    password:  {type: String, require: true}
})

userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user._v
        delete user.password
    }
})

userSchema.pre('save')
const User = mongoose.model ('User', userSchema)
module.exports = User