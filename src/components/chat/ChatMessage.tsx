import React from 'react'
import './ChatMessage.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className='message'>
      <AccountCircleIcon className='icon'/>
      <div className='messageInfo'>
        <h4>
          Test User
          <span className='messageTime'>2023/12/08</span>
        </h4>
        <p>Hello Would</p>
      </div>
    </div>
  )
}

export default ChatMessage