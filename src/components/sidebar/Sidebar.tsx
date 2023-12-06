import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>sidebar</h3>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar