const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
   name : String,
   last:String,
    email: String,
    password: String
})

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);
// console.log(FormDataSchema)
module.exports = FormDataModel;
