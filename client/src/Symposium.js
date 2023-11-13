import React from 'react'
import "./App.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Symposium=()=> {
    const [newUser,setNewUser]=useState({
        Participant_id:null,
        Participant_name:"",
        Department:"",
        Event_name:"",
        Venue:"",
        Winner:""
    })
    console.log(newUser)
const navigate = useNavigate()
const handleChange=(e)=>{
    setNewUser((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const handleClick = async e=>{
    e.preventDefault()
    console.log("Hi")
    try{
        await axios.post("http://localhost:1995/new",newUser)
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

  return (
    <>
    <body>
    <div className="wrapper">
    <h1>Symposium Registration Form</h1>
      <form action="">
        <div className="input-box">
          <div className="input-field">
            <label className='details'>Participant_id</label>
            <input type="number" placeholder="Enter Your ID" required onChange={handleChange} name="Participant_id"/>
          </div>
          <div className="input-field">
            <label className='details'>Participant_name</label>
            <input type="text" placeholder="Enter Your Name" required onChange={handleChange} name="Participant_name"/>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <label className='details'>Department</label>
            <input type="text" placeholder="Enter Your Department" required onChange={handleChange} name="Department"/>
          </div>
          <div className="input-field">
            <label className='details'>Event_name</label>
            <input type="text" placeholder="Enter Your Event_Name" required onChange={handleChange} name="Event_name"/>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <label className='details'>Venue</label>
            <input type="text" placeholder="Enter Your Venue" required onChange={handleChange} name="Venue"/>
          </div>
          <div className="input-field">
            <label className='details'>Winner</label>
            <input type="text" placeholder="Enter Your Winner" required onChange={handleChange} name="Winner"/>
          </div>
        </div>

        <button type="submit" className="btn" onClick={handleClick}>Register</button>
      </form>
    </div>
    </body>
    </>
  );
}

export default Symposium;
