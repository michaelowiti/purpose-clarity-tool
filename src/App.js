
import React, { useState } from "react";
import { Routes ,Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Form from "./Form";
import './App.css';
import Register from "./Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
    <NavBar />

      <Routes>
      <Route exact path="/navbar" element={<NavBar  setIsLoggedIn={setIsLoggedIn}/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login"   element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route exact path="/form" element={<Form  />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        </Routes>

        

    </div>
  )
}

export default App;


