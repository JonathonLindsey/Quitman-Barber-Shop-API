const express = require('express');
const bodyParser = require('body-parser');
const appointmentsRouter = require('./app/routes/appointmentRoutes');
const db = require('./lib/database');
const errorHandlerMiddleware = require('./app/middleware/errorHandler');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/appointments', appointmentsRouter);

// Error handlers always go last
app.use(errorHandlerMiddleware());


const dbConfig = {
  hostname: '127.0.0.1',
  port: 27017,
  database: 'appointments',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 3,
  }
};

db.configure(dbConfig);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
