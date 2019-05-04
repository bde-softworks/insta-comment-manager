require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 3000

const isProd = process.env.NODE_ENV === 'production';

// Database Connection
if (isProd) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
  mongoose.set('debug', true);
}

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to the database ...');
});


// Logging middleware
app.use(morgan('combined'))

app.get('/', (req, res) => {
  return res.send('Hello World!')
});

// Receive webhooks here
app.post('/hook', (req, res) => {
  /*  
    doSome.work(() => {
      
      // Do something here

      res.status(200);
      res.send();

    })
  */
});

app.listen(port, () => console.log(`App listening on Port ${port}! 🚀`))
