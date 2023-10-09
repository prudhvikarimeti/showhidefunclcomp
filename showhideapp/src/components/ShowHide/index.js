import React from 'react'

import { useState } from 'react'

import './index.css'

const ShowHide=()=> {
    const[firstname,setFirstName]=useState(false);
    const[lastname,setLastName]=useState(false);



function onFirstNameClick(){
setFirstName(!firstname)
}

const onLastNameClick=()=>{
    setLastName(!lastname)
}

  return (
    <div className='main-container'>
      <h1 className='heading'>Show/Hide</h1>
      <div className='name-container'>
        <div className='button-container'>
            <button 
            type="button"
            className='btn'
            onClick={onFirstNameClick}>
                Show/Hide FirstName
            </button>
            {firstname?<p className='name-card'>Joe</p>:""}
        </div>
        <div className='button-container'>
            <button 
            type="button"
            className='btn'
            onClick={onLastNameClick}>
                Show/Hide FirstName
            </button>
            {lastname?<p className='name-card'>Jonas</p>:""}
        </div>
      </div>
    </div>
  )
}

export default ShowHide
