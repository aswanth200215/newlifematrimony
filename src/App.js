import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./pages/login";
import Form from "./pages/Form";
import Verify from "./pages/Verify";
import Reset from "./pages/Reset";
import Admin from "./pages/Admin";
import { Home } from "./pages/Home";

class App extends Component{
    render(){
        return(
            <div className="App">
               <BrowserRouter>
                <Routes>
                    <Route path= '/' element={<Login />} />
                    <Route path="Form" element={<Form />} />
                    <Route path="Verify" element={<Verify />} />
                    <Route path="Reset" element={<Reset />} />
                    <Route path="Admin" element={<Admin />} />
                    <Route path="Home" element={<Home />} />
                </Routes>
               </BrowserRouter>
                
            </div>
        )
        
    }
}

export default App;