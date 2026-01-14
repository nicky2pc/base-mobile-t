// src/App.jsx
import { useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'

function App() {
  const [isInBaseApp, setIsInBaseApp] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initialize = async () => {
      try {
        // Проверяем, запущены ли мы внутри Base App
        const context = await sdk.getContext()
        console.log("Context:", context)
        
        if (context) {
          setIsInBaseApp(true)
          // Скрываем сплэш-скрин Base App
          await sdk.actions.ready()
          console.log("✅ Running inside Base App")
        } else {
          console.log("⚠️ Running as regular web app")
        }
        
        // Получаем информацию о пользователе
        try {
          const user = await sdk.getUser()
          console.log("User:", user)
        } catch (error) {
          console.log("User not logged in:", error.message)
        }
        
      } catch (error) {
        console.error("SDK Error:", error)
      } finally {
        setLoading(false)
      }
    }

    initialize()
  }, [])

  if (loading) {
    return <div>Initializing...</div>
  }

  return (
    <div style={styles.container}>
      <h1>Base Mini App {isInBaseApp ? "✅" : "⚠️"}</h1>
      
      {isInBaseApp ? (
        <div style={styles.success}>
          <h2>🎉 Running inside Base App!</h2>
          <p>Mini App is working correctly.</p>
        </div>
      ) : (
        <div style={styles.warning}>
          <h2>⚠️ Not running inside Base App</h2>
          <p>This will work correctly when opened from:</p>
          <ul>
            <li>• Base App on mobile</li>
            <li>• Base App browser extension</li>
            <li>• Preview in Base Build tool</li>
          </ul>
          <p>For testing, open <a href="https://www.base.dev/preview" target="_blank" style={{color: '#0052FF'}}>Base Build Preview</a></p>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  success: {
    backgroundColor: '#d1fae5',
    padding: '20px',
    borderRadius: '12px',
    border: '2px solid #10b981',
    margin: '20px 0',
  },
  warning: {
    backgroundColor: '#fef3c7',
    padding: '20px',
    borderRadius: '12px',
    border: '2px solid #f59e0b',
    margin: '20px 0',
  }
}

export default App