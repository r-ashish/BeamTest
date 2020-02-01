const express = require('express');
const app = express();
const apiRouter = require('./router/api');
const PORT = 3000;

app.use('/api', apiRouter);

app.listen(PORT, () =>{
   console.log('Server is running at PORT:', PORT);
});