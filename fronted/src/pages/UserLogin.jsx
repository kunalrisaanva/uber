// import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"


const UserLogin = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [userData , setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(email,password);

        setUserData({
            email,
            password
        })
       console.log(userData);
        setEmail('')
        setPassword('')
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-30 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
      <form onSubmit={(e) => {
            submitHandler(e)
      }}>
        <h3 className="text-lg mb-2 font-medium"> Whats your email</h3>
        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@example.com" className="bg-[#eeeeee] rounded px-4 py-2 border w-full mb-7 text-lg placholder:text-base" />

        <h3 className="text-lg mb-2">Enter Password</h3>
        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter your password" className="bg-[#eeeeee] rounded px-4 py-2 border w-full mb-7 text-lg placholder:text-base" />

        <button type="submit" className="bg-[#111] text-white font-semibold rounded px-4 py-2  w-full mb-3 text-lg placholder:text-base">Login</button>
      </form>
        <p className="text-center">New here ? <Link to='/signup' className="text-blue-600">Create a new Account </Link> </p>
      </div>

      <div>
      <Link to="/captain-login" className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded px-4 py-2  w-full mb-5 text-lg placholder:text-base">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
 