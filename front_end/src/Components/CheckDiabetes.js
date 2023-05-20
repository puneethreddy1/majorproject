import React, { useState } from 'react'
import { dataref } from './firebase'
import Select from "react-select";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import CheckFailed from './CheckFailed';
import NavBar from './Navbar';
import Result from './Result';
const CheckDiabetes = () => {
  const [Gender, setGender] = useState("")
  const [highClr, sethighClr] = useState("")
  const [Age, setAge] = useState("")
  const [BloodPressure, setBloodPressure] = useState('0')
  const [PrevHeartD, setPrevHeartD] = useState("")
  const [PhysicalHealth, setPhysicalHealth] = useState("")
  const [BMI, setBMI] = useState("")
  const [MentalHealth, setMentalHealth] = useState("")
  const [Smoking, setSmoking] = useState("")
  const [generalHealth, setgeneralHealth] = useState("")
  const [diffWalk, setdiffWalk] = useState("")
  const [Alcoholic, setAlcoholic] = useState("")
  const [outCome, setoutCome] = useState(false)
  const [loading,setloading]=useState(false);


    const options = [
      { value: "0", label: "No" },
      { value: "1", label: "Yes" },
    ];
  
    const rating = [
      { value: '0', label: 'very bad' },
      { value: '1', label: 'bad' },
      { value: '2', label: 'moderate' },
      { value: '3', label: 'good' },
      { value: '4', label: 'excellent' },
    ];
  
    const sex = [
      { value: '1', label: 'male' },
      { value: '0', label: 'female' }
    ];
    
  async function postData(dataForm){
    await dataref.ref(`User/${sessionStorage.getItem('UserName')}/History`).push(dataForm).then(()=>{
        console.log(dataForm);
        //window.location.href = '/showResult'
      }).catch((e)=>{
        console.log(e);
      })
      sessionStorage.setItem('Values',JSON.stringify(dataForm));
      window.location.href = '/showResult'
  }
  function getAgeForML(a){
    if(a>=18 && a<=54){
      if(a>=18 && a<=39){
        if(a>=18 && a<=29){
          if(a>=18 && a<=24) return 1;
          else return 2;
        }
        else{
          if(a>=30 && a<=39){
            if(a>=30 && a<=34) return 3;
            else return 4;
          }
        }
      }
      else{
          if(a>=40 && a<=49){
            if(a>=40 && a<=44) return 5;
            else return 6;
          }
          else return 7;
      }
    }
    else{
      if(a>=55 && a<=69){
        if(a>=55 && a<=64){
          if(a<=59) return 8;
          else return 9;
        }
        else return 10;
      }
      else{
          if(a<=79){
            if(a<=74) return 11;
            else return 12;
          }
          else return 13;
      }

    }
  }
var age1=getAgeForML(parseInt(Age));

var data={
    bp:parseInt(BloodPressure.value),
    chol:parseInt(highClr.value),
    bmi: parseInt(BMI),
    smoker:parseInt(Smoking.value),
    heart: parseInt(PrevHeartD.value),
    alcohol:parseInt(Alcoholic.value),
    genhlth:parseInt(generalHealth.value),
    menthlth:parseInt(MentalHealth),
    phyhlth:parseInt(PhysicalHealth),
    diffwalk:parseInt(diffWalk.value),
    sex:parseInt(Gender.value),
    age:age1
  }
async function predictValue(){
  let x;
  try{
    await fetch("/",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(JSON.stringify(data.Prediction))
       x=data.Prediction;
    }
      )
    return x;
  }catch(e){
    console.log(e)
  }
}

 async function check(e){
    e.preventDefault();
        let x=await predictValue();
      let y=x==0?false:true;
   console.log(y)
   let dataForm={
    Gender : Gender.value,
    highClr : highClr.value,
    Age : Age,
    BloodPressure : BloodPressure.value,
    PrevHeartD : PrevHeartD.value,
    PhysicalHealth : PhysicalHealth,
    BMI : BMI,
    MentalHealth : MentalHealth,
    Smoking : Smoking.value,
    generalHealth : generalHealth.value,
    diffWalk : diffWalk.value,
    Alcoholic : Alcoholic.value,
    outCome : y
    }
    sessionStorage.setItem('result', y);
    postData(dataForm);

  }

  const style = {
    color: '#079458',
    fontWeight: 500
  }
  const style1 = {
    backgroundColor: '#f7f1f1'
  }
  return (
    <div>
      <NavBar/>
      {sessionStorage.getItem('UserName') == undefined ?
        <CheckFailed />
        :
        <div>
      <form className="bg-white my-10" onSubmit={check}>
        <div className="mx-auto max-w-7xl px-6 ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Check Diabates
            </p>
          </div>
          <div className="mb-3 my-10 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Gender</label>
            <div className="col-sm-10">
              <Select options={sex} onChange={(selectedOption) => {
                setGender(selectedOption);
              }} id='highClr' />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Age</label>
            <div className="col-sm-10">
              <input type="number" className="htmlForm-control" value={Age} onChange={(e) => { setAge(e.target.value) }} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">High Blood Pressure</label>
            <div className="col-sm-10">
              <Select options={options} onChange={(selectedOption) => {
                setBloodPressure(selectedOption);
              }} autoFocus={true} id='BloodPressure' />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">High Cholesterol</label>
            <div className="col-sm-10">
              <Select options={options} onChange={(selectedOption) => {
                sethighClr(selectedOption);
              }} id='highClr' />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">BMI</label>
            <div className="col-sm-10">
              <input type="number" className="htmlForm-control" value={BMI} onChange={(e) => { setBMI(e.target.value) }} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Previous Heart Disease</label>
            <div className="col-sm-10">
              <Select options={options} onChange={(selectedOption) => {
                setPrevHeartD(selectedOption);
              }} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Physical Health</label>
            <div className="col-sm-10">
              <input type="number" min="1" max="30" className="htmlForm-control" value={PhysicalHealth} onChange={(e) => { setPhysicalHealth(e.target.value) }} />
              <div id="emailHelp" className="htmlForm-text">How many days does it normally take to heal your injuries.</div>
            </div>
          </div>
          <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Mental Health</label>
            <div className="col-sm-10">
              <input type="number" min="1" max="30" className="htmlForm-control" value={MentalHealth} onChange={(e) => { setMentalHealth(e.target.value) }} />
              <div id="emailHelp" className="htmlForm-text">How many days does it normally take to heal your injuries.</div>
            </div>
            {/* <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Mental Health</label>
            <div className="col-sm-10">
              <Select options={rating} onChange={(selectedOption) => {
                setMentalHealth(selectedOption);
              }} id='highClr' />
              <div id="emailHelp" className="htmlForm-text">How much do you rate your mental health</div>
            </div> */}
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">General Health</label>
            <div className="col-sm-10">
              <Select options={rating} onChange={(selectedOption) => {
                setgeneralHealth(selectedOption);
              }} id='highClr' />
              <div id="emailHelp" className="htmlForm-text">How much do you rate your General health</div>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Difficulty In Walk</label>
            <div className="col-sm-10">
              <Select options={options} onChange={(selectedOption) => {
                setdiffWalk(selectedOption);
              }} id='highClr' />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Smoking</label>
            <div className="col-sm-10">
              <Select options={options} onChange={(selectedOption) => {
                setSmoking(selectedOption);
              }} id='highClr' />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Alcoholic</label>
            <div className="col-sm-10">
              <Select options={options} onChange={(selectedOption) => {
                setAlcoholic(selectedOption);
              }} id='highClr' />
            </div>
          </div>
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Check
          </button>
        </div>
      </form>
    </div>
}
</div>
  )
}

export default CheckDiabetes
