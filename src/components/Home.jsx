import React, { useState, useContext } from 'react'

import UserContext from '../context/Usercontext';


function Home() {
  // const [str, setStr] = useState('');
  const data = useContext(UserContext);
  const handleClicked = (e) => {
    e.preventDefault();
    data.setIsClicked(!data.isclicked);
  }
  // console.log(data);
  return (
    <div className='App'>
      <button onClick={handleClicked} >Click</button>
      <h1>{data.strdata}</h1>
    </div>
  )
}

export default Home