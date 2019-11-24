const app = require('express')();
const router = require('./routes');
const bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./db');
const { errorProvider } = require('./common/responseProvider')
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(router);

app.use(function (err, req, resp, next) {
  return errorProvider(res, 500, {}, err)
});

app.listen(5000, () => {
  db.connectDB()
  console.log('App lisening on port 5000');
});

