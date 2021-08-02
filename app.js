const express = require('express');
const app = express();


const test = require('./routes/test')

app.use(test.getRoute);


app.listen(3000);