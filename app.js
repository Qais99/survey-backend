const express = require('express');
const app = express();


const test = require('./routes/test')

app.use(test);


app.listen(3000);