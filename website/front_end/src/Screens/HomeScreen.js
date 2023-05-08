import React from 'react';

import axios from 'axios'
import Navbar from '../Components/Navbar';

export default function HOmeScreen(){
    var data_false={bp:1,chol:1,bmi:40,smoker:1,heart:0,phy:0,alcohol:1,genhlth:5,menthlth:18,phyhlth:15,diffwalk:1,sex:0,age:9}//remove phy
var data_true={bp:1,chol:1,bmi:30,smoker:1,heart:1,phy:0,alcohol:0,genhlth:5,menthlth:30,phyhlth:30,diffwalk:1,sex:0,age:9}

  async function predictValue() {
    try {
        const result = (await axios.post("/", data_true)) // change proxy and put '/' to directly talk to python in package.json
        console.log(result.data.Prediction)
        

    } catch (e) {
        console.log(e);
    }
}
    return(
        <div>
        <Navbar />
      <h1>THIS IS HOME PAGE</h1>
        <button onClick={predictValue}> click me</button>
        </div>
    );
}