const express = require('express');

const app = express();
const _process = require('./controllers/process');
const port = process.env.PORT || "8000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',_process);

app.listen(port, () => console.log(`API start listening at `+ port))

module.exports = app;