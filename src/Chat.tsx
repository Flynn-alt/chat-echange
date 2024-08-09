import React, { useState } from 'react';
// import useChatStore from './store';

const Chat = () => {
  const [input, setInput] = useState('');
  // const { messages, addMessage } = useChatStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // addMessage(input);
      setInput('');
    }
  };

  return (
    // <div>
    // {messages.map((msg, index) => (
    //   <div key={index}>{msg}</div>
    // ))}
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
