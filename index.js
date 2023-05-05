var express=require('express')
var bodyParser=require('body-parser')
const app = express();
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var url="http://127.0.0.1:5000"

//TEST DATA
//var data={Preg:0,Glucose:148,Bp:72,Skinthickness:35,Insulin:168,Bmi:33.6,Dpf:0.627,Age:50} other dataset
var data_false={bp:1,chol:1,bmi:40,smoker:1,heart:0,phy:0,alcohol:1,genhlth:5,menthlth:18,phyhlth:15,diffwalk:1,sex:0,age:9}
var data_true={bp:1,chol:1,bmi:30,smoker:1,heart:1,phy:0,alcohol:0,genhlth:5,menthlth:30,phyhlth:30,diffwalk:1,sex:0,age:9}


async function getpred(input){
  await axios.post(url+'/',input)
  .then(response => {
    console.log(response.data.Prediction);
  })
  .catch(error => {
    console.log(error);
  });
}

app.get('/',(req,res)=>{
    getpred(data_true)
    res.sendFile(__dirname+'/main.html')
})
const port = process.env.PORT || "3000";
app.listen(port);
console.log('server started on port: ' + port);

