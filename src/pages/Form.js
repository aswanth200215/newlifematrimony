import { Component } from "react";
import "./Form.css"

class Form extends Component{
    initalState = {
        name:" ",
        job:"  "
 
    }
    state = this.initalState;

    render(){
        return(
           <section className = "register-block">
            <div className ="container">
            <form>
            <div className="register-sec">
            <div className="text-center">
            <div >
                <label htmlFor="name"> Name</label>
                <input type="text" name="name" id='name' />
                </div>
                <div>
                <label htmlFor="Gender">Gender</label>
                <select name="Gender" id="Gender">
                    <option value="--">--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                </div>
                <div>
                <label htmlFor="time of birth">Time of birth</label>
                <input type="time" name="time of birth" id='time of birth' />
                </div>
                <div>
                <label htmlFor="DOB">Date of Birth</label>
                <input type="date" name='Date of Birth' id='DOB' />
                </div>
                <div>
                <label htmlFor="Day of birth">Day of Birth</label>
                <select name="Day of birth" id='Day of birth'>
                    <option value={"Sunday"}>Sunday</option>
                    <option value={"Monday"}>Monday</option>
                    <option value={"Tuesday"}>Tuesday</option>
                    <option value={"Thursday"}>Thursday</option>
                    <option value={"Friday"}>Friday</option>
                    <option value={"Saturday"}>Saturday</option>
                
                
                </select>
                </div>

                <div>
                <label htmlFor="Place of birth">Place of birth</label>
                <input type="text" name="Place of birth" id='Place of birth' />
                </div>

                <div>
                <label htmlFor="Father name">Father name</label>
                <input type="text" name="Father name" id='Father name' />
                </div>

                <div>
                <label htmlFor="Moother name">Mother name</label>
                <input type="text" name="Mother name" id='Mother name' />
                </div>

                <div>
                <label htmlFor="Qualification">Qualification</label>
                <input type="text" name="Qualification" id='Qualification' />
                </div>

                <div>
                <label htmlFor="Job details">Job details</label>
                <input type="text" name="Job details" id='Job details' />
                </div>
                <div>
                <label htmlFor="Salary">Salary per Month</label>
                <input type="text" name="Salary" id='Salary' />
                </div>
                <div>
                <label htmlFor="Religion">Religion</label>
                <select name="Religion" id='Religion'>
                    <option value={"Hindu"}>Hindu</option>
                    <option value={"Muslim"}>Muslim</option>
                    <option value={"Christian"}>Christian</option>
                    <option value={"No"}>No</option>
                </select>
                </div>
                <div>
                <label htmlFor="commuinity">Commuinity</label>
                <select name="commuinity" id='commuinity'>
                <option value={"BC"}>BC</option>
                <option value={"SC"}>SC</option>
                <option value={"OC"}>OC</option>
                <option value={"FC"}>FC</option>
                <option value={"MBC"}>MBC</option>
                <option value={"No"}>No</option>
                </select>
                </div>
                <div>
                <label htmlFor="Cast">Cast</label>
                <input type="text" name="cast" id='cast' />
                </div>



                <div>
                <label htmlFor="Brother / sister details">Brother/ sister details</label>
                <input type="text" name="Brother /sister detials" id='Brother /sister detials' />
                </div>
                <div>
                <label htmlFor="Raasi">Raasi</label>
                <input type="text" name="Raasi" id='Raasi' />
                </div>
                <div>
                <label htmlFor="Natchathiram">Natchathiram</label>
                <input type="text" name="Natchathiram" id='Natchathiram' />
                </div>
                <div>
                <label htmlFor="Phone number">Phone number</label>
                <input type="text" name="Phone number" id='Phone number' />
                </div>
                <div className="btn-login">
                    <input type="button" value="submit" />
                </div>
                </div>
                </div>
            </form>
            </div>
           </section>
            
        )

    }
}

export default Form;
