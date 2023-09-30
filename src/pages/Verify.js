import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Verify.css"


const Verify = () => {

  const navigate = useNavigate();
  return (
    <section className='register-block'>
        <div>
            <form className='container'>

            <label htmlFor="name" className='register-sec'>Email id</label>
            <input type="text" name="name" id='name' />
            <button className='btn-next float-center' type='submit' >Send OTP</button>
            <label htmlFor="otp" className='register-sec '> OTP</label>
            <input type="number" name="otp" id='otp' />

            <button className='btn-next' type='submit' onClick={() => navigate('/Reset')}>Next</button>
            </form>
        </div>
    </section>
  )
}


export default Verify;