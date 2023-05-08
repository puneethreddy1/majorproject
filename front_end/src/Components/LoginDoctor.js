import React, { useState } from 'react'
import { dataref } from './firebase'
const LoginDoctor = (props) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const check = (e) => {
        e.preventDefault();
        console.log();
        dataref.ref(`Doctor`).child(Email).child(Password).get()
            .then((e) => {
                if (e.exists()) {
                    props.setuserName(Email);
                    props.setLoggedIn(true);
                    sessionStorage.setItem('UserName', Email);
                    window.location.href = '/Doctor'
                }
            })
    }
    
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-1900">Diabates Prediction Application</h1>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                   Login As Doctor
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" onSubmit={check}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            User Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"
                                required
                                value={Email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={Password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="/SignIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Create a account
                    </a>
                </p>
                
            </div>

        </div>

        // <div className='container my-3' style={style}>
        //     <form onSubmit={check}>
        //         <h1 className="text-center display-6">Login</h1>
        //         <div className="mb-3">
        //             <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
        //             <input type="text" className="form-control" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
        //             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        //             <input type="password" className="form-control" value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
        //             <a className="my-3" href='/signIn'>Sign in</a>
        //         </div>
        //         <button type="submit" className="btn btn-primary">Login</button>
        //     </form>
        // </div>
    )
}

export default LoginDoctor
