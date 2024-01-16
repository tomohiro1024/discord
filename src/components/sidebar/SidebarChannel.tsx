import React from 'react'
import './SidebarChannel.scss'
import ChatIcon from '@mui/icons-material/Chat';
import { DocumentData } from 'firebase/firestore';
import { useAppDisPatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

type Props = {
  id: string;
  channel: DocumentData;

}

const SidebarChannel = (props: Props) => {
  const {id, channel} = props
  // dispatch(Actionを送る)
  // サイドバーのチャンネルをクリックしたタイミングで発火したい
  const dispatch = useAppDisPatch()

  console.log(channel)
  return (
    <div className='sidebarChannel' onClick={() => dispatch(
      setChannelInfo(
        {
          channelId:  id,
          channelName: channel.channel.channleName,
        }
      )
      )}>
      <h4>
        <span className='sidebarChannelHash'><ChatIcon /></span>
        {channel.channel.channleName}
      </h4>
    </div>
  )
}

export default SidebarChannel