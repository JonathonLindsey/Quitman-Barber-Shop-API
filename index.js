const express = require('express');
const barberRouter = require('./routes/barber.routes')

const port = 3000;
const app = express();

app.use('/api/v1/barberShop', barberRouter);

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});

