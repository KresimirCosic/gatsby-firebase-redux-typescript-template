import React, { useState, useEffect } from "react"

import "../styles/index.scss"

import Message from "../components/Message"

const Home: React.FC = () => {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    setTimeout(() => {
      setStatus("Welcome!")
    }, 1000)
  }, [])

  return (
    <div className="Home page page-home">
      <Message data={status} />
    </div>
  )
}

export default Home
