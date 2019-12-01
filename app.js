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

app.use('/qw',(req,resp)=>{
 
  resp.json({name:'Nishant'})});
app.use(router);

app.use(function (err, req, resp, next) {
  console.log('err middleware')
  return errorProvider(resp, 500,undefined,"Something went bad on server.")
});

app.listen(5000, () => {
  db.connectDB()
  console.log('App lisening on port 5000');
});

