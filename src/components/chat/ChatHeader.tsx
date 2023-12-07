import React from 'react'
import './ChatHeader.scss'
import ChatIcon from '@mui/icons-material/Chat';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'><ChatIcon /></span>
          楽しいチャンネル
        </h3>
      </div>
    </div>
  )
}

export default ChatHeader