import { useEffect, useState } from "react";
import ConfirmPopUp from "./ConfirmPopup";
import { dataref } from "./firebase";
import ShowDoc from "./ShowDoc";


export default function Result() {
  const [found,setFound] = useState(false);
  const getDoctor = async () => {
    await dataref.ref(`Doctor/`).get()
      .then((e) => {
        if (e.exists()) {
          console.log(Object.values(e.val()))
          sessionStorage.setItem("Doctor",JSON.stringify(Object.values(e.val())));
          console.log(sessionStorage.getItem("Doctor"))
          setFound(true);
        }
      }).catch((e) => {
        console.log(e);
      })
  }
  var result = true;
  const [popup, setpopup] = useState(false)
  const [Id, setId] = useState("");
  const bookAnAppoinment = (e) => {
    console.log(Id);
    dataref.ref(`Doctor/${sessionStorage.getItem("UserName")}/Appointment`).push({
      userName : sessionStorage.getItem("UserName"),
      email : sessionStorage.getItem("UserInfo"),
      values : sessionStorage.getItem("Values")
    }).then(() => {
      setpopup(false);
      console.log("Success");
    }).catch(e)

  }
  useEffect(() => {
    getDoctor();
  }, [])
  return (
    <div>
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
                    return <ShowDoc person={e} bookAnAppoinment={bookAnAppoinment} setpopup={setpopup} setId={setId} popup={popup} Id={Id} />
                  }) : ""
                }
              </ul>
            </div >
          </div >
          :
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Hey, It Looks Like you may not have Diabates.</h1>
              <p className="mt-6 text-base leading-7 text-gray-600">If you want to consult a doctor here are some list of doctors.</p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {
                  found ? 
                  JSON.parse(sessionStorage.getItem("Doctor")).map((e) => {
                    return <ShowDoc person={e} bookAnAppoinment={bookAnAppoinment} setpopup={setpopup} setId={setId} popup={popup} Id={Id} />
                  }) : ""
                }
              </ul>
          </main>
      }
    </div>

  )
}
