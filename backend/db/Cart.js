const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    u_id:{
        type: String,
        required : true
    },
    p_id:{
        type : String,
        required : true
    },
    quantity:{
        type : String,
        required : true
    }
});

 module.exports = mongoose.model('Cart',cartSchema);