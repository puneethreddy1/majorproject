import React, { useState } from 'react'
import Records from './Records';
import { dataref } from './firebase';
import HistoryFailer from './HistoryFailed';
import { useEffect } from 'react';
const History = (props) => {
  const [Prev,setPrev] = useState([]);
  const [loading,setLoading]=useState(true);
  let store=[];
  async function getHistory(){
    await dataref.ref(`User/${sessionStorage.getItem('UserName')}/History`).get()
      .then((e) => {
        if (e.exists() && e.val()!=null) {
          let arr=e.val();
          for(const d in arr){
            store.push(arr[d])
          }   
        }
      }).catch((e)=>{
        console.log(e);
      })
      setPrev(store);
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
                    Prev.map(e=>
                      <Records val={e} />
                      )
                  }
                </tbody>
              </table>
            </div>
          </div>

        </div>
      }
    </div>

  )
}

export default History
