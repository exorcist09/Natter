import React from 'react'

const MessageCard = ({isRequestedUserMessage,content}) => {
  return (
    <div className={`py-2 px-2 rounded-md maz-w-[50%] ${isRequestedUserMessage ? "self-start bg-blue-500" : "self-end bg-green-500" }`}>
        <p>{content}</p>
    </div>
  )
}

export default MessageCard