import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SidebarChannel from './SidebarChannel';
import { auth } from '../../firebase';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./logout.png" alt="" onClick={() => auth.signOut()} />
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Menu</h3>
        </div>
        <div className='sidebarChannel'>
          <div className='sidebarChannelHeader'>
            <div className='sidebarHeader'>
              <h4>トークチャンネル</h4>
            </div>
            <AddCircleIcon className='sidebarIcon' />
          </div>
          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar