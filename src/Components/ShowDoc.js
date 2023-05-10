import React from 'react'
import ConfirmPopUp from './ConfirmPopup'
const ShowDoc = (props) => {
    console.log(props)
  return (
    <div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="p-4 md:p-5">
                      <h3 class="text-lg font-bold text-gray-800">
                        {props.person.userName}
                      </h3>
                      <p class="mt-2 text-gray-800 dark:text-gray-400">
                        {props.person.desc} & here is my email {props.person.email}
                      </p>

                      <button class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" id={props.person.name} onClick={(e)=>{
                        props.setpopup(true);
                        props.setId(e.target.id)
                      }}>
                        Book an appoinment
                        <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </button>
                      {props.popup ? <ConfirmPopUp id={props.Id} setpopup={props.setpopup} bookAnAppoinment={props.bookAnAppoinment}/> : ""}
                    </div>
                  </div>
                  
    </div>
  )
}

export default ShowDoc
