import React from "react"
import {} from "@material-ui/core"

export interface MessageComponentProps {
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
