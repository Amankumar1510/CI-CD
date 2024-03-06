import './App.css';
import {useState} from "react";

import{
  BrowserRouter as Router,Route,Routes,Link
 
}from 'react-router-dom';

// import {Greet} from './Component/Greet';
// import Welcome from './Component/Welcome';
import Login from './Component/Login.js';
import Register from './Component/Register.js';
import Insert from './Component/Insert';
import Display from './Component/Display';
import Deleteid from './Component/Deleteid.js';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Welcome to React Application.</h1>
  //     <Greet/>
  //     <Welcome/>
  //   </div>
  // );
  const [val,setVal]=useState(0);
  let inc=()=>{
    setVal(val+1);
  }
  let dec=()=>{
    setVal(val-1);
  }
  return(
    
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Registration">Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Value is {val}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <Link to="/Insert">Insert</Link>
      <Link to="/Display">Display</Link>
      <Link to="/Deleteid">Delete</Link>
      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="/Registration" element={<Register />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Display" element={<Display/>} />
        <Route path="/Deleteid" element={<Deleteid/>} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
