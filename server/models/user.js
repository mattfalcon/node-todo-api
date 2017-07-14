var mongoose = require('mongoose');

//NEW USER MODEL 
//EMAIL PROPERTY REQUIRE AND TRIM, SET TYPE AND MIN LENGTH OF 1
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var user = new User({
//     email: 'matt@example.com  '
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });

//module exports where user = user (es6)
module.exports = {User};