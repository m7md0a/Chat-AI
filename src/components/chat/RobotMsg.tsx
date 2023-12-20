import React from 'react'

function RobotMsg({content, error}: {content: string | React.ReactNode, error?: boolean}) {
  return (
    <div className="chat chat-start">
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/robot.png" />
        </div>
        </div>
        {
          error ? 
            <div className="bg-error text-error-content chat-bubble">{content}</div> :
            <div className="chat-bubble items-center">{content}</div>
        }
    </div>
  )
}

export default RobotMsg