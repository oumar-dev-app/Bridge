'use client';
import { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(setMessages);
  }, []);

  return (
    <div>
      <h2>Messages visiteurs</h2>

      {messages.map(m => (
        <div key={m.id}>
          <strong>{m.email}</strong> : {m.message}
        </div>
      ))}
    </div>
  );
}
