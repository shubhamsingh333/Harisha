import React, { useState } from 'react'

function Form() {
  const [name ,setName] =useState("Shubham")

  const handleChannge = (e)=>{
    // setName(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit =(event)=>{
    // event.preventDefault()
    console.log(name)
    // alert(name)
  }
  return (
    <form onSubmit={handleSubmit}>
    <label >Name :</label>
    <input type="text" placeholder='enter your name' value={name} onChange={handleChannge}/>
    <input type="submit" />

    {/* <label >Password :</label>
    <input type="password" placeholder='enter your password' /> */}
    </form>

  )
}

export default Form