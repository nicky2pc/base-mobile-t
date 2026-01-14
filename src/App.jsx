// app.tsx
import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return <div>Hello World</div>;
}

export default App;