import sdk from '@farcaster/frame-sdk';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('init...');
  const [logs, setLogs] = useState([]);

  const log = (msg) => {
    console.log(msg);
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  useEffect(() => {
    const init = async () => {
      try {
        log('SDK version: 0.0.58');
        log('SDK object: ' + Object.keys(sdk).join(', '));

        if (sdk.context) {
          const ctx = await sdk.context;
          log('Context: ' + JSON.stringify(ctx));
        } else {
          log('No sdk.context');
        }

        log('Calling sdk.actions.ready()...');
        await sdk.actions.ready();
        log('ready() SUCCESS');
        setStatus('READY!');
      } catch (e) {
        log('ERROR: ' + e.message);
        setStatus('error: ' + e.message);
      }
    };

    init();
  }, []);

  return (
    <div style={{ padding: 10, fontFamily: 'monospace', fontSize: 11 }}>
      <h2>Status: {status}</h2>
      <div style={{ background: '#000', color: '#0f0', padding: 10, maxHeight: 300, overflow: 'auto' }}>
        {logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}

export default App;
