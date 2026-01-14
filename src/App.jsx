import sdk from '@farcaster/miniapp-sdk';
import { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('listening...');

  useEffect(() => {
    // Слушаем ВСЕ входящие сообщения от Base Preview
    const handler = (event) => {
      console.log('Received message:', event.data, 'from:', event.origin);
      setMessages(prev => [...prev, JSON.stringify(event.data, null, 2)]);
    };

    window.addEventListener('message', handler);

    // Ждём немного и вызываем ready
    const init = async () => {
      console.log('Waiting 500ms then calling ready...');
      await new Promise(r => setTimeout(r, 500));

      try {
        await sdk.actions.ready();
        console.log('ready() done');
        setStatus('ready() called');
      } catch (e) {
        console.error('ready error:', e);
        setStatus('error: ' + e.message);
      }
    };

    init();

    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'monospace', fontSize: 12 }}>
      <h2>Status: {status}</h2>
      <h3>Incoming messages from parent:</h3>
      <div style={{ maxHeight: 400, overflow: 'auto', background: '#f0f0f0', padding: 10 }}>
        {messages.length === 0 ? (
          <p>No messages received yet...</p>
        ) : (
          messages.map((msg, i) => (
            <pre key={i} style={{ background: '#fff', padding: 5, margin: 5 }}>{msg}</pre>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
