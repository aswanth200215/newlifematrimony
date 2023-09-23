import { useState } from "react"
import "./login.css"
export default function Login(){
    const intitalStateErrors = {
        email:{required:false},
        password:{required:false},
        custom_error:null
    };

    const [errors,setErrors]=useState({
        email:{required:false},
        password:{required:false},
        custom_error:null
    });

    const [loading,setLoading]= useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        let errors = intitalStateErrors;
        
        if (inputs.email == ""){
            errors.email.required=true;
        }
        if (inputs.password == ""){
            errors.password.required=true;
        }

        setErrors(errors);

    }
    
    const [inputs,setInputs] = useState({
        email:"",
        password:""
    }
    )
    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }


    
    return(
        <section classNameName="register-block">
            <div className="container">
               <div className="row ">
                    <div className="col register-sec">
                     <h2 className="text-center">Welcome To New Life Matrimony</h2>
                     <h3 className="text-center">Login To Continue</h3>
                     <form onSubmit={handleSubmit} className="register-form" action="" >
                      
                      <div className="form-group">
                        <label htmlhtmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
          
                        <input type="text"  className="form-control" onChange={handleInput} name="email" id=""  />
                        {
                            errors.email.required==true?
                            <span className="text-danger" >
                            Email is required.
                        </span>:null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" onChange={handleInput} type="password"  name="password" id=""/>
                        
                        {
                            errors.password.required==true?
                            <span className="text-danger" >
                            Password is required.
                        </span>:null
                        }
                     </div>
                     <div className="form-group">
                        
                        <span className="text-danger" >
                        {errors.custom_error?Login
                           (<p>Custom Error Message!</p>)
                        :null
                        }
                        </span>
                        {loading?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null
                        }
                        <input type="submit" className="btn btn-login float-right"  value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                       <line>To Create New Profile </line><a href="#">Click here</a>
                     </div>
          
          
                     </form>
          
          
                  </div>
          
               </div>
          
          
            </div>
        </section>
        

    )
}

