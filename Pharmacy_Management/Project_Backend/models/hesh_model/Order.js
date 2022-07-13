const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    cusid : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    age : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    mobileno : {
        type : String,
        required : true
    },

    symptoms : {
        type : String,
        required : true
    },

    cardno: {
        type : String,
        required : true
    },
    
    cardcvv : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required : true
    },

    itemname1 : {
        type : String,
        required : true
    },

    itemquantity1 : {
        type : String,
        required : true
    },
    
    itemname2 : {
        type : String,
        required : true
    },
    itemquantity2 : {
        type : String,
        required : true
    },
    
    itemname3 : {
        type : String,
        required : true
    },
    itemquantity3 : {
        type : String,
        required : true
    },
    orderstatus : {
        type : String,
        default : "pending..."
    },
    
})

const Order = mongoose.model("OrderTaken", orderSchema);

module.exports = Order;