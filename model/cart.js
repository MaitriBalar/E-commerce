const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  pid : {
    type : Schema.Types.ObjectId,
    ref : 'product'
  },
  uid : {
    type : Schema.Types.ObjectId,
    ref : 'user'
  },
  time : {
    type : Date,
    default : Date.now()
  }
});

module.exports = mongoose.model('cart', cartSchema);