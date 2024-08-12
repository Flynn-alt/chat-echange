import React, { useState } from 'react';

import responsesData from './assets/data.json';

import './Chat.css'

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, addMessage] = useState<Array<string>>();

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responsesData.responses.length);
    return responsesData.responses[randomIndex];
  };

  const streamResponse = (response: string) => {
    const characters = response.split('');
    let currentMessage = '';

    characters.forEach((char, index) => {
      setTimeout(() => {
        currentMessage += char; // Append the current character
        addMessage((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = currentMessage; // Update the last message
          return updatedMessages;
        });
      }, index * 50); // 100 milliseconds per character
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessages = messages ? [...messages, input] : [input];
      addMessage(newMessages);
      setInput('');

      // Add a delay before starting to stream the random response
      setTimeout(() => {
        const randomResponse = getRandomResponse();
        addMessage((prevMessages) => [...prevMessages, '']); // Add an empty message to update
        streamResponse(randomResponse);
      }, 1000); // 2000 milliseconds = 2 seconds
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages?.map((msg, index) => (
          <div key={index} className={`message ${index % 2 === 0 ? 'user' : ''}`}>{msg}</div>
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className='barre'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className='barre-button'
          type="submit"
        >Send</button>
      </form>
    </div>
  );
};

export default Chat;
