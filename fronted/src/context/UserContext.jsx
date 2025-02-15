// import { useContext } from "react";

import { createContext, useState } from "react"

// import React from 'react'
export const UserDataContext = createContext()

// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {

    const [user , setEmail] = useState( {
        email:"",
        fullName:{
            firstname:"",
            lastname:""
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={user}>
            
    {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext