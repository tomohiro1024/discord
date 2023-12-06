import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Menu</h3>
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChannel'>
          <div className='sidebarChannelHeader'>
            <div className='sidebarHeader'>
              <h4>トークチャンネル</h4>
            </div>
            <AddCircleIcon className='sidebarIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar