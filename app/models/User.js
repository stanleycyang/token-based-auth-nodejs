var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

UserSchema.pre('save', function(next){
    var user = this;
    
    if(!user.isModified('password')){
        return next();
    }

    bcrypt.hash(user.password, null, null, function(error, hash){
        if(error) return next(error);
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(){
    var user = this;
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);
