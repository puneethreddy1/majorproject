import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import PatientListScreen from './Screens/PatientListScreen';
import HOmeScreen from './Screens/HomeScreen';

function App() {

  return (
    
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HOmeScreen />} />
          <Route path="/patientlist" element={<PatientListScreen />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
