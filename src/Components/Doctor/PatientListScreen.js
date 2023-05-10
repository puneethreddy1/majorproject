import DoctorNavbar from "../Doctor/DoctorNavBar"
import React, { useState, useEffect, Component } from 'react'
import Patient from "../Doctor/Patient";
import { dataref } from "../firebase"
const people = [

]

export default function PatientListScreen() {
    const [found,setFound] = useState(false);
    const getAppointment = async () =>{
        await dataref.ref(`Doctor/${sessionStorage.getItem('UserName')}/Appointment`).get()
            .then((e) => {
                if (e.exists()) {
                    console.log(e.val());
                    sessionStorage.setItem("Appointment", JSON.stringify(Object.values(e.val())));
                    console.log(JSON.parse(sessionStorage.getItem("Appointment")));
                    setFound(true);
                }
            }).catch((e) => {
                console.log(e);
            })
    }
    useEffect(() => {
        getAppointment();
    }, [])


    return (
        <>
            <div className="hover:overflow-y-scroll h-screen border-4 hover:border-t-8 ">
                <ul role="list" className="divide-y divide-gray-100">
                    {found ? JSON.parse(sessionStorage.getItem("Appointment")).map((e) => (
                        <Patient person={e} />
                    )) : ""} 
                </ul>
            </div>
        </>
    )
}
