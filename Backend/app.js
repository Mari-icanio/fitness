const express = require('express');
const db = require('./db');
const Router = require('./src/Routes/routes');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/v1', Router); 

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
