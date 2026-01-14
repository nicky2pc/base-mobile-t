import sdk from '@farcaster/miniapp-sdk';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('initializing...');

  useEffect(() => {
    const init = async () => {
      try {
        console.log('SDK:', sdk);
        console.log('SDK context:', sdk.context);

        // Ждём контекст
        const context = await sdk.context;
        console.log('Context resolved:', context);
        setStatus('context loaded, calling ready...');

        // Вызываем ready
        await sdk.actions.ready();
        console.log('ready() called successfully');
        setStatus('ready() called!');
      } catch (e) {
        console.error('Error:', e);
        setStatus('error: ' + e.message);
      }
    };

    init();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello World</h1>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
