import React from 'react'

function UserMsg({content}: {content: string}) {
  return (
    <div className="chat chat-end me-2">
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/user.png" />
        </div>
        </div>
        <div className="chat-bubble">{content}</div>
    </div>
  )
}

export default UserMsg