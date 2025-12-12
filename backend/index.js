const mongoose = require('mongoose');
const app = require('./server');

 

const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/Todo2';

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(5000, () => console.log("server started"));
