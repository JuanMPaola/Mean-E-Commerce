const express = require('express');

require('dontenv').config();

process.env.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server listening ${PORT} `);
});