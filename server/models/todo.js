//load mongoose library
var mongoose = require('mongoose');


//create a model for everything we want to store (text, completed, completedAt attribute)
var Todo = mongoose.model('Todo', {
    text: {
      type: String,        
//------------VALIDATORS-----------------------------  
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
//---------OTHER VALIDATOR--------------------------
      default: false
    },
    completedAt: {
      type: Number,
//----------OTHER VALIDATOR-------------------------
      default: null
    }
});


//export model
module.exports = {Todo};

