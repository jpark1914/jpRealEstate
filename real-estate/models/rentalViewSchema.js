const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const rentalViewModel = new Schema({
   name: {
       type: String,
   } ,
    age: {
       type: Number,
    },
    rentalHouseAddress: {
       type: String,
    },
    timeOfViewing: {
       type: Date,
        default: Date.now()
    },
    email: {
       type: String,
    },
    phone:{
       type: Number,
    }
});

module.exports = mongoose.model('rental', rentalViewModel);