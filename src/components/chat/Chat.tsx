import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatIcon from '@mui/icons-material/Chat';

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chatMessage'>
        <ChatMessage />
      </div>
      <div className='chatInput'>
        <form>
          <input type='text' placeholder='メッセージを送信'></input>
          <button type='submit' className='chatInputButton'>
            送信
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat