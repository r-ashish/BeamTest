const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const apiRouter = require('./router/api');
const PORT = 3000;

app.use(cors({credentials: true, origin: true}));
app.use('/api', apiRouter);

mongoose.connect('mongodb://localhost:27017/db', {
   useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('mongodb started.');
    app.listen(PORT, () =>{
      console.log('Server is running at PORT:', PORT);
   });
}).catch(() => {
    console.log('Mongodb connection failed.');
});