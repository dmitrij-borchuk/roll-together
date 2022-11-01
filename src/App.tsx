import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getUser } from './firebase/auth'

function App() {
  const user = getUser()

  if (!user) {
    window.location.href = '/sign-in'
    return null
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={user.photoURL || logo} className="App-logo" alt="user" />
        <p>{user.displayName}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
