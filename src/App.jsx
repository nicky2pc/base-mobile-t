import sdk from '@farcaster/frame-sdk';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('initializing...');

  useEffect(() => {
    const init = async () => {
      try {
        console.log('SDK:', sdk);

        // frame-sdk использует sdk.actions.ready()
        await sdk.actions.ready();
        console.log('ready() called');
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
