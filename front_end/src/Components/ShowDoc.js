import React from 'react'
import ConfirmPopUp from './ConfirmPopup'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { dataref } from "./firebase";
const ShowDoc = (props) => {
    //console.log(props)
    const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
let data={
  userName : sessionStorage.getItem("UserName"),
  result: sessionStorage.getItem("result"),
  values : sessionStorage.getItem("Values")
};
  const bookAnAppoinment = () => {
    try{
    
    dataref.ref(`Doctor/${props.name}/Appointment`).push(data).then(() => {
      
      //console.log(data);
    })}
    catch(e){
      console.log(e)
    }
  }
  function dothis(){
    console.log(props.name); 
  }
  console.log(props); 
  return (
    <div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="p-4 md:p-5">
                      <h3 class="text-lg font-bold text-gray-800">
                        {props.name}
                      </h3>
                      <p class="mt-2 text-gray-800 dark:text-gray-400">
                        {props.desc} & here is my email {props.email}
                      </p>

                      <button class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" id={props.name} onClick={(e)=>{
                        setOpen(true);
                      }}>
                        Book an appoinment
                        <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </button>
                      
                      <Transition.Root show={open} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                              </Transition.Child>

                              <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                  >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                              Confirm Appoinment
                                            </Dialog.Title>
                                            <div className="mt-2">
                                              <p className="text-sm text-gray-500">
                                                Our Doctor Will Contact you by Email or Mobile Number by Tommorow.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                          type="button"
                                          
                                          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                          onClick={() => {setOpen(false)
                                          bookAnAppoinment()
                                        }}
                                        >
                                          Confirm
                                        </button>
                                        <button
                                          type="button"
                                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                          onClick={() => {setOpen(false);dothis();}}
                                          ref={cancelButtonRef}
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </Dialog.Panel>
                                  </Transition.Child>
                                </div>
                              </div>
                            </Dialog>
                          </Transition.Root>  
                      
                    </div>
                  </div>
                  
    </div>
  )
}

export default ShowDoc
