import React, { useEffect, useState } from 'react'
import { onSnapshot, collection, query, DocumentData, CollectionReference, Query } from 'firebase/firestore'
import { db } from '../firebase';

// Firestoreのchannelsというコレクションの中のドキュメントの取得(メッセージやチャンネルネームの取得)

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([])
  // 現状のユーザーの情報を取得

  const collectionRef: Query<DocumentData> = query(collection(db, data))

  useEffect(() => {
    // リアルタイムでデータ取得
    onSnapshot(collectionRef, (querySnapshot) =>{
      const channelsResults: Channels[] =[]
      querySnapshot.docs.forEach((doc) => 
      // console.log(doc.id, doc.data())
      channelsResults.push({
        id: doc.id,
        channel: doc.data()
      })
      )
      setDocuments(channelsResults)
    })
  }, [])

  return { documents }
}

export default useCollection