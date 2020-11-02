import React from "react"

interface MessageComponentProps {
  data: string
}

const Message: React.FC<MessageComponentProps> = ({ data }) => {
  return (
    <div className="Message">
      <h1>{data}</h1>
    </div>
  )
}

export default Message
