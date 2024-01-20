import React, { useState } from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatIcon from '@mui/icons-material/Chat';
import { useAppSelector } from '../../app/hooks';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Chat = () => {
  const [inputText, setInputText] = useState<string>("") 

  console.log(inputText)

  // 現在のユーザーの状態を取得
  const channelName = useAppSelector((state) => state.channel.channelId)
  console.log(channelName)

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // メッセージを送信した時、ページのリロードを防ぐ
    e.preventDefault()
    
    // channelsコレクションの中のmessageコレクションの中にメッセージ情報を入れる。
    const collectionRef = collection(db, "channels")
  }


  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className='chatInput'>
        <form>
          <input type='text' placeholder='メッセージを送信' 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
          <button type='submit' className='chatInputButton'
           onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
            送信
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat