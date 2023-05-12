
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
export default function Patient({ person }) {
    const [show, setShow] = useState(false);
    console.log(person);
    function cancelButtonRef() {
        //get more details about the patient from firebase

    }

    return (
        <div>
            <li key={person.email} className="flex justify-between gap-x-6 py-5 px-4">
                <div className="flex gap-x-4">
                    <div class="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-orange-500 text-xl text-white uppercase">{person.userName[0]}</div>
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.userName}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{(person.values).outCome ?
                        <div className="status is-complete">
                            <span className="status-icon"></span>
                            <span className="text">Positive</span>
                        </div>
                        :
                        <div className="status is-failed">
                            <span className="status-icon"></span>
                            <span className="text">Negative</span>
                        </div>
                    }</p>
                    {/* {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )} */}
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShow(true)}>
                    View Details
                </button>
                <Transition.Root show={show} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setShow}>

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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className="">
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        Details
                                                    </Dialog.Title>
                                                    <div className="">
                                                        
                    
                        <h6 className='text-sm text-gray-500'><b>Gender : {(person).Gender=="male" ? "male" : "female"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>High Cholesterol : {(person).highClr=="1" ? "Yes" : "No"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Age : {(person).Age}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>High BP : {(person).BloodPressure=="1" ? "Yes" : "No"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Previous Heart Disease : {(person).PrevHeartD=="1" ? "Yes" : "No"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Physical Health : {(person).PhysicalHealth}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>BMI : {(person).BMI}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Mental Health : {(person).MentalHealth}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Smoking : {(person).Smoking=="1" ? "Yes" : "No"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>General Health : {(person).generalHealth=="1" ? "Yes" : "No"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Difficulty in Walk : {(person).diffWalk=="1" ? "Yes" : "No"}</b></h6>
                        <h6 className='text-sm text-gray-500'><b>Alcoholic : {(person).Alcoholic=="1" ? "Yes" : "No"}</b></h6>
                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={() => setShow(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </li>
        </div>
    );
}