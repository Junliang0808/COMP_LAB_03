console.clear();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


// register the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);


///ERROR HANDLING
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);

app.listen(1000, () => console.log("Always watching... on port 1000"));