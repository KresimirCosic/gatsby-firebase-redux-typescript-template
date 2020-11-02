import React, { useState, useEffect } from "react"

const Home: React.FC = () => {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    setTimeout(() => {
      setStatus("Welcome!")
    }, 1000)
  }, [])

  return (
    <div className="page page-home">
      <h1>Status: {status}</h1>
    </div>
  )
}

export default Home
