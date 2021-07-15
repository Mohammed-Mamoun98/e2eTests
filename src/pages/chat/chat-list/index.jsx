import React, { useMemo } from 'react'
import "./index.scss"
import { usePromise } from './../../../hooks/usePromise';
import { getAllUsers, usersRef, USERS_COLLECTION } from './../../../firebase/firestore';
import { useEffect } from 'react';
import { firestore } from '../../../firebase/config';
import ChatLink from './chat-link/index';
import { Chat } from './../../../firebase/classes/chat';

export default function ChatList() {
    const [getUsers,rawUsers,loading] = usePromise(getAllUsers())
    const [getAllChats,rawChats,chatLoading,chatError,setChats] = usePromise(Chat.getAllChats())
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user?.uid

    const isNotMe = (user)=>{
        return user.uid !== uid
    }

    useEffect(()=>{
        getUsers()
        getAllChats()
    },[])

    useEffect(() => {
        Chat.onChatsCahnged((newChats)=>{
            setChats(newChats)
        })
      },[])

    console.log({rawChats,chatError});

    const users = useMemo(() => rawUsers?.filter(isNotMe), rawUsers?.lenght) 

    return (
        <div>
            {loading && <span>Loading...</span>}
            <span>
                Contacts
            </span>
            {users?.map(user =>(
                <ChatLink name={user.displayName} id={user.uid} />
            ))}
            <br />
            {chatLoading &&<span>
                Chat Loading 
            </span>}
            <span>Chats</span>
            {rawChats?.map(chat =>(
                <ChatLink name={chat.test} id={user.uid} />
            ))}

        </div>
    )
}
