'use client'
import RobotMsg from '@/components/chat/RobotMsg'
import UserMsg from '@/components/chat/UserMsg'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import axios from 'axios';

type MessageType = {
  role: string;
  content: string
}

function page() {
  const input = useRef() as MutableRefObject<HTMLInputElement>
  const chatDiv = useRef() as MutableRefObject<HTMLDivElement>
  const [text, setText] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string|null>(null)
  const [messages, setMessages] = useState<MessageType[]>([])



  function chat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    scrollToBottom()
    const newMessages = [...messages, {role: 'user', content: text}]
    setMessages(newMessages)
    setLoading(true)
    try {   
      axios.post('/api',{
        message: text
      }).then(res=> {
        setLoading(false)
        setError(null)
        setMessages([...newMessages, res.data.message[0].message])
        localStorage.setItem('messages', JSON.stringify([...newMessages, res.data.message[0].message]))
        setText('')        
        input.current.value = '';
      }).catch(error => {
        setError(error.message)
        setLoading(false)
        setText('')
      })
    } catch (error) {
      setError('Error')
    }
  }

  const scrollToBottom = () => {
    setTimeout(() => {
      chatDiv.current.scrollTo({
        top: chatDiv.current.scrollHeight + 70000,
        behavior: 'smooth',
      });
    }, 500);
  };

  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem('messages') || "[]") || [])
    scrollToBottom()
  }, [])
  
  return (
    <main className='px-1 md:px-4 pb-10 container max-w-5xl mx-auto md:pt-24 min-h-screen'>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100">
        <div className='card-body px-1 md:px-4'>
            <div ref={chatDiv} className='h-[26rem] overflow-y-scroll ps-4'>
              {messages && messages.length > 0 ? messages.map((message, index) => {
                  if (message.role === "user") {
                  return <UserMsg key={index} content={message.content}/>
                  }
                  else return <RobotMsg key={index} content={message.content}/>
              }): 
                  <div className='h-2/4 flex justify-center items-center text-xl font-bold text-base-content/60'>Send me a message now!</div>
              }
              {loading && <RobotMsg content={<span className="loading loading-dots loading-md items-center"></span>}/>}
              {error && <RobotMsg error content={error}/>}
            </div>
            <form onSubmit={chat} className="mt-6 flex">
                <input onChange={e => setText(e.target.value)} ref={input} className="input input-bordered join-item w-3/4 md:w-full" placeholder="Text"/>
                <button className="btn btn-primary ms-2">Send</button>
            </form>
        </div>
        </div>
    </main>
  )
}

export default page