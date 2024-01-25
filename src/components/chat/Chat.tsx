import React, { useEffect, useState } from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatIcon from '@mui/icons-material/Chat';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

const Chat = () => {
  const [inputText, setInputText] = useState<string>("") 

  console.log(inputText)

  // チャンネル名の取得
  const channelName = useAppSelector((state) => state.channel.channelName)
  console.log(channelName)
  // クリックしたチャンネルID
  const channelId = useAppSelector((state) => state.channel.channelId)

  // ログインしているユーザーの取得
  const user = useAppSelector((state) => state.user.user)

  // useEffectの第2引数にはチャンネル名をクリックする度に発火させたい
  useEffect(() => {

let collectionRef = collection(
  db,
  "channels",
  String(channelId),
  "messages",
)

    onSnapshot(collectionRef, (snapshot) => {

    })

  }, [channelId])

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // メッセージを送信した時、ページのリロードを防ぐ
    e.preventDefault()
    
    // channelsコレクションの中のmessageコレクションの中にメッセージ情報を入れる。
    const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages" )

    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      // inputTextはテキストフィールドに入力した値
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    })
    console.log(docRef)
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