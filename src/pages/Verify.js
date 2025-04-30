import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Verify.css"


const Verify = () => {

  const navigate = useNavigate();
  return (
    <section >
        <div>
            <form className='container'>
            <h1 className='header'>Verify Its You</h1>
              <div>
                <label htmlFor="name" className='register'>Email id</label>
                <input type="text" name="name" id='name' />
                <button className='btn-next' type='submit' >Send OTP</button>
              </div>
              <div>
                <label htmlFor="otp" className='register'> OTP</label>
                <input type="text" name="otp" id='otp' />
                <button className='btn-next' type='submit' onClick={() => navigate('/Reset')}>Next</button>
              </div>
            
            
            

            
            </form>
        </div>
    </section>
  )
}


export default Verify;