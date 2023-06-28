const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient, ObjectId } = require('mongodb');
const appointmentRoutes = require('./app/routes/appointmentRoutes');
const { connectToDatabase } = require('./lib/database');

const app = express();
const PORT = 3000;

connectToDatabase();

// Parse JSON request bodies
app.use(bodyParser.json());

//Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1/appointments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
}); 

// Connect to MongoDB using the MongoDB driver
const uri = 'mongodb://127.0.0.1/appointments';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
}); 

/* const dbConfig = {
    hostname: '127.0.0.1',
    port: 27017,
    database: 'arca',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 3,
    }
  };
  
  db.configure(dbConfig); */

// Set up routes
app.use('/appointments', appointmentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
