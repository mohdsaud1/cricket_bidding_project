const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name:String,
    age:Number,
    batsman:Boolean,
    bowler:Boolean,
    wicketKeeper:Boolean,
    allRounder:Boolean,
    mobileNo:{type: Number, unique: true},
    amt:Number
  });

  module.exports = mongoose.model('Data', DataSchema);