import React, { useState } from 'react';
// import useChatStore from './store';
import './Chat.css'

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, addMessage] = useState<Array<string>>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      messages ? addMessage([...messages, input])
        : addMessage([input]);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages?.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
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
