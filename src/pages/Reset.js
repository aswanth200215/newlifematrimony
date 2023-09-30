import React from 'react'

const Reset = () => {
  return (
    <section className='register-block'>
        <div>
            <form>
            <label htmlFor="New Password">New Password</label>
            <input type="text/number" name="New Password" id='New Password' />
            
            <label htmlFor="Confirm New Password">Confirm New Password</label>
            <input type="text/number" name="Confirm New Password" id='Confirm New Password' />

            <button type='Submit'>submit</button>

            </form>
        </div>
    </section>
  )
}

export default Reset;