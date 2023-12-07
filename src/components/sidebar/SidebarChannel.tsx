import React from 'react'
import './SidebarChannel.scss'
import ChatIcon from '@mui/icons-material/Chat';

const SidebarChannel = () => {
  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannelHash'><ChatIcon /></span>
        楽しいチャット
      </h4>
    </div>
  )
}

export default SidebarChannel