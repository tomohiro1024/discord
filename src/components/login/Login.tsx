import React from 'react'
import "./Login.scss"
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className='login'>
      <div className='loginForm'>
      </div>
      <Button onClick={signIn}>Googleログイン</Button>
    </div>
  )
}

export default Login