import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        sdk.actions.ready();
    }, []);

    return(...your app content goes here...)
}

export default App;