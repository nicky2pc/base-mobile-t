import { MiniKitProvider, useMiniKit } from '@coinbase/onchainkit/minikit';
import { useEffect } from 'react';

function Content() {
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
    console.log("ready");
  }, [setFrameReady]);

  return <div>Hello World</div>;
}

function App() {
  return (
    <MiniKitProvider>
      <Content />
    </MiniKitProvider>
  );
}

export default App;
