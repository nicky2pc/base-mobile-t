import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const init = async () => {
      const isInMiniApp = await sdk.isInMiniApp();
      if (isInMiniApp) {
        sdk.actions.ready();
      }
    };
    init();
  }, []);

  return <div>Hello World</div>;
}

export default App;