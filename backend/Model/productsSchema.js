const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/IntellectNotes', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

//Schema

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: Number,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

//Model
const productsModel = mongoose.model('products', productsSchema);

module.exports = productsModel;