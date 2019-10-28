const app = require('express')();
const router = require('./routes');
const bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./db');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors({
  'Access-Control-Allow-Origin':'http://mytest.com'

}))
// app.use((req, resp,next) => {
//   resp.header('Access-Control-Allow-Origin',
//     "http://mysite.com")
//   resp.header('Access-Control-Allow-Headers',
//     "Origin, X-Requested-With, Content-Type,Accept,Authorization");

//     resp.header('Access-Control-Allow-Methods', "POST, GET, PUT, PATCH, DELETE ")
//     next();
// });

app.use(bodyParser.json());
app.use(router);


app.listen(5000, ()=>{
    db.connectDB()
    console.log('App lisening on port 5000');
});

