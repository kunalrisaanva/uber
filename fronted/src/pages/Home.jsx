// import React from 'react'
import {Link} from "react-router-dom"



const Home = () => {
  return (
    <div>

        <div className="bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1736278142126-a559f81eb109?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRyYWZpYyUyMGxpZ2h0JTIwYXN0aGV0aWN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400">
            <img className="w-30 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
            <div className="bg-white py-4 px-4">
                <h2 className="text-3xl font-bold">Get Started With Uber</h2>
                <Link to="/login" className="flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
        </div>

    </div>
  )
}

export default Home