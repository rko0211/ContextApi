import React from 'react';

import UsercontextProvider from './context/UsercontextProvider';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

// Context Consumer --> To access data 
function App() {


  return (
    <UsercontextProvider>
      <Header />
      <Home />

    </UsercontextProvider>
  );
}

export default App;
