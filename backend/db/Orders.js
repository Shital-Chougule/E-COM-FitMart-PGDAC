const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
    u_id:{
        type: String,
        required : true
    },
    payment_mode : {
        type : String,
        default : "Cash"
    },
    date :{
        type : String,
        default : new Date(Date.now()),
        required : true
    },
    ord_number : {
        type : String,
        required : true,
        default : "123"
    },
    address : {
        type : String,
        required : true,
    },
    orderedproducts : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
        default : "Pending"
    }
});

 module.exports = mongoose.model('Orders',ordersSchema);