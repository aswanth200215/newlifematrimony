import React from 'react'
import "./Reset.css"

const Reset = () => {
  return (
    <section className='register-block'>
        <div>
            <form className='container'>
            <h1 className='header'>Create Your New Password</h1>
            <div className='register-sec'>
            <label htmlFor="New Password">New Password</label>
            <input type="text/number" name="New Password" id='New Password' />
            </div>
            <div className='register'>
            <label htmlFor="Confirm Password">Confirm Password          </label>
            <input type="text/number" name="Confirm Password" id='Confirm New Password' />
            </div>
            <button className='btn flaot-center' type='Submit'>submit</button>

            </form>
        </div>
    </section>
  )
}

export default Reset;