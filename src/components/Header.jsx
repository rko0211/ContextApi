import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'
function Header() {
  const data = useContext(UserContext);
  return (
    <div>{data.headerdata}</div>
  )
}

export default Header