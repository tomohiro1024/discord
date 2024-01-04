import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { useAppDisPatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from './utils/ErrorFallBack'

function App() {
  const user = useAppSelector((state) => state.user)
  // const user = null
  console.log(user);

  const dispatch = useAppDisPatch()

  // 発火のタイミングを決めることができるhooks
  useEffect(() => {
    // 認証状態の変更(ユーザーがログインしたら・・・)
    auth.onAuthStateChanged((loginUser) =>{
      console.log(loginUser)
      if(loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })

  }, [dispatch])


  return (
    <div className="App">
      { user ? 
      (
        <>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Sidebar />
      </ErrorBoundary>
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
