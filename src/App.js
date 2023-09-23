import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./pages/login";
import Form from "./pages/Form";
import display from "./pages/display";

class App extends Component{
    render(){
        return( 
            <div className="App">
               <BrowserRouter>
               <Routes>
                    <Route path= '/' element={<Login />} />
                    <Route path="Form" element = {<Form />} />
                    <Route path="display" element ={<display />} />
                </Routes>
               </BrowserRouter>
                
            </div>
        )
        
    }
}

export default App;