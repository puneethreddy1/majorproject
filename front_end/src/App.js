import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import CheckDiabetes from './Components/CheckDiabetes'
import BMI from "./Components/BMI";
import History from './Components/History';
import Login from './Components/Login';
import SignIn from './Components/SignIn'
import LoginDoctor from './Components/LoginDoctor'
import { dataref } from './Components/firebase';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './Components/LandingPage';
import Result from './Components/Result';
import UserProfile from './Components/UserProfile';

function App() {
  const [userName,setuserName] = useState('');
  const [loggedIn,setLoggedIn] = useState(false);
  if(sessionStorage.getItem('UserName')==! undefined){
    setuserName(sessionStorage.getItem('UserName'));
    localStorage.setItem('history',true)
    setLoggedIn(true);
    console.log(loggedIn);
  }
  const [Prev, setPrev] = useState([]);
    return (
    <div > 
      <Router>
            <Navbar login={loggedIn} userName = {userName}></Navbar>
            <Routes>
              <Route path='/' element={<LandingPage/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path='/userProfile' element={<UserProfile/>}></Route>
              <Route path='/checkDiabetes' element={<CheckDiabetes/>}></Route>
              <Route path='/calculateBmi' element={<BMI/>}></Route>
              <Route path='/signIn' element={<SignIn/>}></Route>
              <Route path='/history' element={<History prev={Prev}/>}></Route>
              <Route path='/showResult' element={<Result></Result>}></Route>
              <Route path='/loginDoctor' element={<LoginDoctor/>}></Route>
              <Route path='/login' element={<Login userName={userName} setuserName={setuserName} setLoggedIn={setLoggedIn} setPrev={setPrev}/>}></Route>
            </Routes>
          </Router>
    </div>
    
  );
}

export default App;
