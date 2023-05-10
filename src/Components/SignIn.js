import React, { useState } from 'react'
import { dataref } from './firebase'
const SignIn = () => {
  const [userName, setuserName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password1, setPassword1] = useState("")
  const [Password2, setPassword2] = useState("")
  const [isDoctor,setIsDoctor] = useState(false);
  const [Desc,setDesc] = useState("");

  const checkPassword = () => {
    for (let index = 0; index < Password1.length; index++) {
      if (Password1.charAt(index) != Password2.charAt(index)) {
        return false;
      }
    }
    return true;
  }
  const createAsDoctor = async (e) =>{
    if (checkPassword()) {
      dataref.ref(`Doctor/${userName}/`).set({
        userName : userName,
        email: Email,
        desc:Desc
      }).then(() => {
        console.log("Success");
      }).catch(e)
      dataref.ref(`Doctor/${userName}/${Password1}`).set({
        Log: true
      }).then(() => {
        console.log("Success");
        window.location.href = '/Login'
      }).catch(e)
    } else {
      alert("Password doesn't match");
    }
  }

  const createAsUser = async (e) => {
    if (checkPassword()) {
      dataref.ref(`User/${userName}/`).set({
        email: Email
      }).then(() => {
        console.log("Success");
      }).catch(e)
      dataref.ref(`User/${userName}/${Password1}`).set({
        Log: true
      }).then(() => {
        console.log("Success");
        window.location.href = '/Login'
      }).catch(e)
    } else {
      alert("Password doesn't match");
    }
  }
  const create = async (e) => {
    console.log(isDoctor);
    e.preventDefault();
    if(isDoctor) {
      createAsDoctor();
    }else{
      createAsUser();
    }
    
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" onSubmit={create}>
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
                value={userName}
                onChange={(e) => { setuserName(e.target.value) }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
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
                value={Password1}
                onChange={(e) => { setPassword1(e.target.value) }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={Password2}
                  onChange={(e) => { setPassword2(e.target.value) }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            { isDoctor ? <div className='mt-2'>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>

            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="current-password"
                required
                value={Desc}
                onChange={(e) => { setDesc(e.target.value) }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>
            :
            ""
              }
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e)=>{setIsDoctor(e.target.checked)}}/>
            <label class="form-check-label" for="flexRadioDefault1">
              Create Account As Doctor
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Account
            </button>
          </div>
        </form>


      </div>
    </div>
    // <div className='container my-3' style={style}>
    //     <form onSubmit={create}>
    //         <h1 className="text-center display-6">Sign In</h1>
    //         <div className="mb-3">
    //             <label htmlFor="exampleInputEmail1" className="form-label">Enter UserName</label>
    //             <input type="text" className="form-control" value={userName} onChange={(e)=>{setuserName(e.target.value)}} />
    //         </div>
    //         <div className="mb-3">
    //             <label htmlFor="exampleInputEmail1" className="form-label">Enter Email address</label>
    //             <input type="email" className="form-control" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
    //             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    //         </div>
    //         <div className="mb-3">
    //             <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label>
    //             <input type="password" className="form-control" value={Password1} onChange={(e)=>{setPassword1(e.target.value)}}/>
    //         </div>
    //         <div className="mb-3">
    //             <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    //             <input type="password" className="form-control" value={Password2} onChange={(e)=>{setPassword2(e.target.value)}}/>
    //         </div>
    //         <button type="submit" className="btn btn-primary">Create</button>
    //     </form>
    // </div>
  )
}

export default SignIn
