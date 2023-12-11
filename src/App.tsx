import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';

function App() {
  // const user = useSelector((state) => state.user.user)
  const user = null


  return (
    <div className="App">
      { user ? 
      (
        <>
      <Sidebar />
      <Chat />
        </>
      ) : (
        <>
        <Login />
        </>
      )}
      
    </div>
  );
}

export default App;
