
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
// import Dark from './components/Dark';
import { useState } from 'react';
import Alert from './components/Alert';

// import {BrowserRouter as Router} from "react-router-dom";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('primary');

  const [alert, setalert] = useState(null);

  const showalert =(message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


const togglemode = ()=> {
  if(mode === 'primary'){
    setmode('black')
    document.body.style.backgroundColor = 'black';
    showalert("Dark mode is Enable", "success");
    
    setInterval(() => {
      document.title = 'Textutils - Darkmode'
    }, 2000);
    setInterval(() => {
      document.title = 'Textutils is good app'
    }, 1500);

  }
  else{
    setmode('primary')
    document.body.style.backgroundColor = 'white';
    showalert("Light mode is Enable", "success");
  }
}



  return (
    <>
    {/* <Router>
       */}
      <Navbar title = "Utilities" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container mt-5">

      {/* <Routes>
          <Route path="/Dark" element={<Dark/>} />
          <Route path="/" element={ */}
          <Textform heading = "Please Enter Your Text Here"  mode={mode} showalert={showalert} />
      {/* </Routes> */}
        
        
      </div>
      
    {/* </Router> */}
    </>
  );
}

export default App;
