import { useState } from 'react'
import Navbar from './components/Navbar'; // Importing Navbar
import StudentData from './components/StudentData';
import Chatbot from './components/Chatbot';
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="left-side">
          <StudentData />
        </div>
        <div className="right-side">
          <Chatbot />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
