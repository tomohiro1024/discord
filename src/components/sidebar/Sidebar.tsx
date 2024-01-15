import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SidebarChannel from './SidebarChannel';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
// import { collection, query } from 'firebase/firestore/lite';
import { channel } from 'diagnostics_channel';
import useCollection from '../../hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';

const Sidebar = () => {

  const user = useAppSelector((state) => state.user)
  const {documents: channels} = useCollection("channels")

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルを作成")
    if(channelName) {
      await addDoc(collection(db, 'channels'), {
        channleName: channelName
      })
    }
  }

  const [showDialog, setShowDialog] = useState(false);
  const handleSignOut = () => {
    setShowDialog(true); // ダイアログを表示するための状態を更新
  };

  const handleConfirmSignOut = () => {
    auth.signOut(); // ログアウトを実行
    setShowDialog(false); // ダイアログを非表示にする
  };

  const handleCancelSignOut = () => {
    setShowDialog(false); // ダイアログを非表示にする
  };
  return (
    <div className='sidebar'>
      <div className='dialog'>
      {showDialog && (
        <div className="dialog">
          <p>ログアウトしますか？</p>
          <button onClick={handleConfirmSignOut}>はい</button>
          <button onClick={handleCancelSignOut}>いいえ</button>
        </div>
      )}
      </div>
      
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src={user?.photo} alt=""/>
        </div>
        <div className='serverIcon'>
          <img src="./logout.png" alt="" onClick={handleSignOut}/>
        </div>
      </div>
      <div className='sidebarRight'>
        {/* <div className='sidebarTop'>
          <h3>Menu</h3>
        </div> */}
        <div className='sidebarChannel'>
          <div className='sidebarChannelHeader'>
            <div className='sidebarHeader'>
              <h4>トークチャンネル</h4>
            </div>
            <AddCircleIcon className='sidebarIcon' onClick={() => addChannel()} />
          </div>
          <div className='sidebarChannelList'>
            {channels.map((channel) => (
              <SidebarChannel channel={channel} id={channel.id} key={channel.id} />
            ))}
            
            {/* <SidebarChannel />
            <SidebarChannel /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar