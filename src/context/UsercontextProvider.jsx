import React, { useState } from 'react'
import UserContext from './Usercontext';

// Context Provider --> it is a property of the context component. We pass the value to the provider, which make it accessible to child components.
function UsercontextProvider({ children }) {
  // console.log(children);
  const [isclicked, setIsClicked] = useState(false);
  let strdata = "Hello world";
  if (isclicked) {
    strdata = "Welcome to React Context Api "
  }
  const headerdata = "Hello i am Header";
  return (
    <UserContext.Provider value={{ isclicked, setIsClicked, strdata, headerdata }} >

      {children}

    </UserContext.Provider>
  )
}

export default UsercontextProvider;