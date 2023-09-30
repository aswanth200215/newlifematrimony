import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./pages/login";
import Form from "./pages/Form";
import Display from "./pages/Display";

class App extends Component{
    render(){
        return( 
            <div className="App">
               <BrowserRouter>
               <Routes>
                    <Route path= '/' element={<Login />} />
                    <Route path="Form" element = {<Form />} />
                    <Route path="Reset" element = {<Reset />} />
                    <Route path="display" element ={<Display />} />
                    <Route path="Verify" element ={<Verify />} />
                    <Route path="Homepage" element ={<Homepage />} />
                    <Route path="Homepage" element ={<Homepage />} />
                </Routes>
               </BrowserRouter>
                
            </div>
        )
        
    }
}

export default App;