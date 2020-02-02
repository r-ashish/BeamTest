const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const apiRouter = require('./router/api');
const PORT = 3000;
const mongoDbUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/db';

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors({credentials: true, origin: true}));
app.use('/api', apiRouter);

mongoose.connect(mongoDbUrl, {
   useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('mongodb started.');
    app.listen(PORT, () =>{
      console.log('Server is running at PORT:', PORT);
   });
}).catch(() => {
    console.log('Mongodb connection failed.');
});