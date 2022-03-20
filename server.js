const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const res = require('express/lib/response');

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/submit', async (req, res) => {
    

});

app.post('/submit', async (req, res) => {
  console.log(req.body)
  const listingData = await scraper.scrapePage(req.body.url)
  res.send(listingData[1])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})