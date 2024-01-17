import React from 'react'
import './ChatHeader.scss'
import ChatIcon from '@mui/icons-material/Chat';

type Props = {
  channelName: string | null
}

const ChatHeader = (props: Props) => {
  const { channelName } = props
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'><ChatIcon /></span>
          {channelName}
        </h3>
      </div>
    </div>
  )
}

export default ChatHeader