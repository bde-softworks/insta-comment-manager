const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
