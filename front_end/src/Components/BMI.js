import React, { useState } from 'react'
import Navbar from './Navbar'
const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("")
  const [checked, setChecked] = useState(false);
  const cal = async (e) => {
    e.preventDefault();
    const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b61d186845msh6455f78ea66435bp1a0d4fjsn4f8d88cd0395',
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setChecked(true);
      console.log(result);
      setBMI(result.bmi)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
    <Navbar />
    <form className="mx-auto max-w-7xl px-6 my-10" onSubmit={cal}>
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Calculate Body Mass Index
        </p>
      </div>
      <div className="mb-3 row my-10">
        <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Height</label>
        <div className="col-sm-10">
          <input type="number" className="htmlForm-control" value={height} onChange={(e) => { setHeight(e.target.value) }} />
          <div id="emailHelp" className="htmlForm-text text-xsm">Enter Height in Meters</div>
        </div>
      </div>
      <div className="mb-3 row my-10">
        <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Weight</label>
        <div className="col-sm-10">
          <input type="number" className="htmlForm-control" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
          <div id="emailHelp" className="htmlForm-text text-xsm">Enter Weight in Kilograms</div>
        </div>
      </div>
      <button type='submit' className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        Check BMI
      </button>
      <div className="bg-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {BMI==="" ? "" : `Your Body Mass Index Is ${BMI}`}
          </p>
    </div>
    </div>
    </div>
    
</form>
</>
  )
}

export default BMI
