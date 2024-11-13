// src/components/Chatbot.jsx
import React from 'react';
import './Chatbot.css'; // Import the CSS file

const Chatbot = () => {
  return (
    <div className="chatbot">
      <h2>AI-Powered Chatbot</h2>
      <div className="chat-window">
        <div className="messages">
          <p><strong>Chatbot:</strong> How can I assist you today?</p>
        </div>
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
