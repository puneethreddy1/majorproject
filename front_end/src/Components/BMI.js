import React, { useState } from 'react'

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
    // <div className='container my-3' style={style}>
    //   <h1 className='display-5' style={style1}>Calculate BMI</h1>
    //   <form onSubmit={cal}>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Height</label>
    //       <input type="text" className="form-control" value={height} onChange={(e) => { setHeight(e.target.value) }} />
    //       <div id="emailHelp" className="form-text">Enter height in Meters</div>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputPassword1" className="form-label">Enter Weight</label>
    //       <input type="text" className="form-control" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
    //       <div id="emailHelp" className="form-text">Enter Weight in Kilograms</div>
    //     </div>
    //     <button type="submit" className="btn btn-success">Check BMI</button>
    //   </form>
    //   {
    //     checked ?
    //       <div className="row">
    //         <div className="col-2 text-truncate my-3">
    //           BMI is {BMI}
    //         </div>
    //       </div>
    //       :
    //       ""
    //   }
    // </div>
  )
}

export default BMI
