// import React from 'react'
import { useState } from "react";
import {Link} from "react-router-dom"



const UserSinghup = () => {

      const [email,setEmail] = useState('');
      const [firstName,setFirstName] = useState('')
      const [LastName,setLastName] = useState('')
      const [password,setPassword] = useState('');
      const [userData , setUserData] = useState({});
  
      const submitHandler = (e) => {
          e.preventDefault()
          // console.log(email,password);
  
          setUserData({
              fullName:{
                firstName,
                LastName,
              },
              email,
              password
          })
         console.log(userData);
          setFirstName('')
          setLastName('')
          setEmail('')
          setPassword('')
      }

  return (
      <>
      
      <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-30 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
      <form onSubmit={(e) => {
            submitHandler(e)
          }}>

        <h3 className="text-base mb-2 font-medium"> Whats your name</h3>
        <div className="flex gap-4 mb-5">
        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placholder:text-sm" />

        <input required value={LastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2  text-base placholder:text-sm" />
        </div>


        <h3 className="text-base mb-2 font-medium"> Whats your email</h3>
        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@example.com" className="bg-[#eeeeee] rounded px-4 py-2 border w-full mb-5 text-base placholder:text-sm" />

        <h3 className="text-base mb-2">Enter Password</h3>
        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter your password" className="bg-[#eeeeee] rounded px-4 py-2 border w-full mb-5 ttext-base placholder:text-sm" />

        <button type="submit" className="bg-[#111] text-white font-semibold rounded px-4 py-2  w-full mb-3 text-base placholder:text-sm">Login</button>
      </form>
        <p className="text-center">Already have a account ? <Link to='/login' className="text-blue-600">Login here </Link> </p>
      </div>

      <div>
      <p className="text-[10px] leading-tight">
        By proceeding, you consent to get calls, whatsaApp or SMS message, includingg by automated means, from Uber and its affiliates to the number provided.
      </p>
      </div>
    </div>

      </>
  )
}

export default UserSinghup