
import React, { useState } from "react";
import { Routes ,Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Firststep from "./components/Firststep";
import './App.css';
import Register from "./components/Register";



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
      <Route path="/firststep" element={<Firststep />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        </Routes>

        

    </div>
  )
}

export default App;


