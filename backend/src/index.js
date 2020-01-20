const express = require('express');
const mongoosse = require('mongoose');
const routes = require('./routes');

const app = express();

mongoosse.connect('mongodb+srv://kingnaldo:12345@kingnaldo-x22yb.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json()); // deve ser o primeiro para funcionar o JSON
app.use(routes);

app.listen(3333);