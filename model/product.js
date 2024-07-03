const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name : String,
  image : String,
  price : String,
  category : {
    type : Schema.Types.ObjectId,
    ref : 'category'
  }
});

module.exports = mongoose.model('product', productSchema);