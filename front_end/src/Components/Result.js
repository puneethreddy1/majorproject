import { useEffect, useState } from "react";
import ConfirmPopUp from "./ConfirmPopup";
import { dataref } from "./firebase";
import ShowDoc from "./ShowDoc";
import NavBar from "./Navbar";


export default function Result() {
  const [found,setFound] = useState(false);
  const [popup, setpopup] = useState(false)
  const [Id, setId] = useState("");
  const getDoctor = async () => {
    let vec=[];
    await dataref.ref(`Doctor/`).get()
      .then((e) => {
        if (e.exists()) {
          //console.log(Object.values(e.val()))
          for(let i in e.val()){
            if(e.val()[i].userName==undefined) continue;
            vec.push(e.val()[i]);
          }
          // sessionStorage.setItem("Doctor",JSON.stringify(Object.values(e.val())));
          //console.log(sessionStorage.getItem("Doctor"))
          setFound(true);
        }
        sessionStorage.setItem("Doctor",JSON.stringify(vec));
      }).catch((e) => {
        console.log(e);
      })
  }
  // const bookAnAppoinment = (e) => {
  //   console.log(Id);
  //   dataref.ref(`Doctor/${sessionStorage.getItem("UserName")}/Appointment`).push({
  //     userName : sessionStorage.getItem("UserName"),
  //     email : sessionStorage.getItem("UserInfo"),
  //     values : sessionStorage.getItem("Values")
  //   }).then(() => {
  //     setpopup(false);
  //     console.log("Success");
  //   }).catch(e)

  // }
  useEffect(() => {
    getDoctor();
  }, [])
  let result=(sessionStorage.result==='true'); 
  console.log((sessionStorage.getItem("Doctor")));
  return (
    <div>
      <NavBar/>
      {
        result ?
          <div className="bg-white py-24 sm:py-32">
            < div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3" >
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hey, It Looks Like you may have Diabates.</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  So,Please try to consult a doctor regrading this Matter. Here are some of doctor available at our website.
                </p>
              </div>
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {
                  found ? 
                  JSON.parse(sessionStorage.getItem("Doctor")).map((e) => {
                    console.log(e.userName);
                    return <ShowDoc name={e.userName} desc={e.desc} email={e.email}/>
                  }) : ""
                }
              </ul>
            </div >
          </div >
          :
          <div className="bg-white py-24 sm:py-32">
            < div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3" >
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hey, It Looks Like you may not have Diabates.</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                          If you want to consult a doctor, here are some of doctor available at our website.
                </p>
              </div>
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {
                  found ? 
                  JSON.parse(sessionStorage.getItem("Doctor")).map((e) => {
                    return <ShowDoc name={e.userName} desc={e.desc} email={e.email}/>
                  }) : ""
                }
              </ul>
            </div >
          </div >
      }
    </div>

  )
}
