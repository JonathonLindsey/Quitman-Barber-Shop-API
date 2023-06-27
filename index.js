const express = require('express');
const bodyParser = require('body-parser');
const barberRouter = require('./routes/barber.routes')
const errorHandlerMiddleware = require('./middleware/errorHandler');
const db = require('./lib/database');


const port = 3000;
const app = express();

app.use(bodyParser.json());
//other app.use goes here 

app.use('/api/v1/barberShop', barberRouter);

app.use(errorHandlerMiddleware());

const dbConfig = {
    hostname: 'fill' ,
    port: 'fill',
    database: 'fill' ,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 3,
    }
};

db.configure(dbConfig);

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});

