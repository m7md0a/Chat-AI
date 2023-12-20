import RobotMsg from '@/components/chat/RobotMsg'
import UserMsg from '@/components/chat/UserMsg'
import React from 'react'
import Link from 'next/link';

function page() {
  
  return (
    <main className='px-1 md:px-4 pb-10'>
      <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row space-y-14 md:space-y-0">
            <div className="lg:text-left d-mt-24 md:-mt-0">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Chat with ChatGPT</h1>
              <p className="py-6 md:text-lg">Talk to artificial intelligence. You can ask it your questions and get instant answers without the hassle of using search engines.</p>
              <Link href='/chat' className="btn btn-primary">Get Started</Link>
            </div>
            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 hiddedn md:block">
              <div className='card-body'>
                <UserMsg content="Hello"/>
                <RobotMsg content="Hello! How can I assist you today?"/>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default page