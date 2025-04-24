import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clear = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      <button onClick={clear}>Clear</button>

      <div className="preview">
        <h3>Live Preview</h3>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Message:</b> {message}</p>
      </div>
    </div>
  );
}

export default Form;
