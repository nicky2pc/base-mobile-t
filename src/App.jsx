// app.tsx
import { sdk } from '@farcaster/frame-sdk';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return <div>Hello World</div>;
}

export default App;