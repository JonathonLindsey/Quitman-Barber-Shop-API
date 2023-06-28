const express = require('express');
const bodyParser = require('body-parser');
const appointmentsRouter = require('./app/routes/appointmentRoutes');
const errorHandlerMiddleware = require('./app/middleware/errorHandler');
const db = require('./lib/database');
const appointmentMiddleware = require('./app/middleware/appointmentMiddleware')

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/appointments', appointmentsRouter);

// Error handlers always go last
app.use(appointmentMiddleware());
app.use(errorHandlerMiddleware());

const dbConfig = {
  hostname: '127.0.0.1',
  port: 27017,
  database: 'arca',
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
