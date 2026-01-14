import { useEffect } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'

function App() {
  useEffect(() => {
    // СТРОГО ПО ДОКЕ: вызываем ready() как можно раньше
    sdk.actions.ready()
  }, [])

  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <h1>Base Mini App Template</h1>
      <p>This app follows the official documentation.</p>
      <p>It will work correctly when opened from Base App.</p>
      
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f0f9ff',
        borderRadius: '12px',
        border: '1px solid #bae6fd'
      }}>
        <h3>✅ SDK integrated correctly</h3>
        <p><code>sdk.actions.ready()</code> has been called</p>
      </div>
    </div>
  )
}

export default App