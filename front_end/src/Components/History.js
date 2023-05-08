import React, { useState } from 'react'
import Records from './Records';
import { dataref } from './firebase';
import HistoryFailer from './HistoryFailed';
import { useEffect } from 'react';
const History = (props) => {
  const [Prev,setPrev] = useState([]);
  const getHistory = () => {
    dataref.ref(`User/${sessionStorage.getItem('UserName')}/History`).get()
      .then((e) => {
        if (e.exists()) {
          console.log(e.val());
          sessionStorage.setItem("History",JSON.stringify(Object.values(e.val())));
          console.log(JSON.parse(sessionStorage.getItem("History")));
          
        }
      }).catch((e)=>{
        console.log(e);
      })
  }
  useEffect(() => {
    getHistory();
  }, [])
  
  const style = {
    "--p-col-width": 230
  }
  const style1 = {
    "--p-col-width": 185
  }
  return (
    <div>
      {sessionStorage.getItem('UserName') == undefined ?
        <HistoryFailer />
        :
        <div className="bg-white mt-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Previous Records
            </p>
          </div>
          <div className="table-with-scroll mx-10 my-10">
            <div className="table-wrapper">
              <table className="table is-sticky-scroll">
                <thead className="table-thead">
                  <tr className="table-row">
                    <th className="table-thead-col" style={style}>
                      <span className="eyebrow-heading-3">Outcome</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Gender</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Age</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">High BP</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">High Cholesterol</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">BMI</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Heart Disease</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Smoker</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Alcoholic</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">General Health</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Mental Health</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Physical Health</span>
                    </th>
                    <th className="table-thead-col" style={style1}>
                      <span className="eyebrow-heading-3">Difficulty in Walk</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-tbody">
                  {
                    JSON.parse(sessionStorage.getItem("History")).map((e) => {
                      console.log(e);
                        return <Records val={e}/>
                      })
                  }
                </tbody>
              </table>
            </div>
          </div>

        </div>
      }
    </div>

    //   {/* <div className="flex flex-col">
    //     <div className="-m-1.5 overflow-x-auto mx-10 my-10">
    //       <div className="p-1.5 min-w-full inline-block align-middle">
    //         <div className="overflow-hidden">
    //           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    //             <thead>
    //               <tr>
    //                 <th scope="col" className="px-6 py-3">Gender</th>
    //                 <th scope="col" >Age</th>
    //                 <th scope="col" >High BP</th>
    //                 <th scope="col" >High Cholesterol</th>
    //                 <th scope="col" >BMI</th>
    //                 <th scope="col" >Injury's</th>
    //                 <th scope="col" >Difficulty in Walk</th>
    //                 <th scope="col" >Previous Heart Disease</th>
    //                 <th scope='col'>General Health</th>
    //                 <th scope="col" >Mental Health</th>
    //                 <th scope="col" >Smoking</th>
    //                 <th scope="col" >Alcoholic</th>
    //                 <th scope='col'>Outcome</th>
    //               </tr>
    //             </thead>
    //             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
    //               <Records/>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}

    // <div className='container my-3' style={style}>
    //   {/* <span className="border">
    //     No Previous Records...!
    //   </span> */}
    //   <h1 className="text-center display-7" style={style1}>Previous Records</h1>
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">#</th>
    //         <th scope="col">gender</th>
    //         <th scope="col">age</th>
    //         <th scope="col">High BP</th>
    //         <th scope="col">High Cholesterol</th>
    //         <th scope="col">BMI</th>
    //         <th scope="col">Previous Heart Disease</th>
    //         <th scope="col">Physical Health</th>
    //         <th scope="col">Mental Health</th>
    //         <th scope="col">Smoking</th>
    //         <th scope="col">Alcoholic</th>
    //         <th scope="col">OutCome</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {

    //       }
    //       <Records/>
    //     </tbody>
    //   </table>

    // </div>
  )
}

export default History
