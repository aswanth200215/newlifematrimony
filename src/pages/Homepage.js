import React from 'react'

const Homepage = () => {
  return (
    <div>
        <head className='text-center'>New Life Matrimony</head>
        <h1>My Profile</h1>
        <line>Search Profile</line>
        <form>
        <div>
        <label htmlFor='Lookinfor'> Looking For </label>
        <select name='Lookingfor' id='Lookingfor'>
          <option value={"Groom"}>Groom(Mapillai)</option>
          <option value={"Bride"}>Bride(Marumagal)</option>
        </select>
        <label htmlFor="Religion">Religion</label>
                <select name="Religion" id='Religion'>
                    <option value={"Hindu"}>Hindu</option>
                    <option value={"Muslim"}>Muslim</option>
                    <option value={"Christian"}>Christian</option>
                    <option value={"No"}>No</option>
                </select>


        <label name="community" >community</label>
        <select name='community' id='community'>
        <option value={"BC"}>BC</option>
                <option value={"SC"}>SC</option>
                <option value={"OC"}>OC</option>
                <option value={"FC"}>FC</option>
                <option value={"MBC"}>MBC</option>
                <option value={"No"}>No</option>
        </select>

        <label name="cast">cast</label>
        <input type='text' name='cast' id='cast' />

        <label name="martial status">Martial status</label> 
        <select name='martial status' id='community'>
          <option value={"single"}>single</option>
          <option value={"Divorced"}>Divorced</option>
          <option value={"No"}>No</option>
        </select>

        <label name="location" >location</label>
        <input type='text' name='Location' id='location' />
        
        <label name="Job expected">Job expected</label>
        <input type='text' name='Job expected' id='Job expected'/>

        </div>
        </form>
    </div>
  )
}

export default Homepage