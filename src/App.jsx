import React, { useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'

function App() {
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        // Инициализируем SDK
        await sdk.actions.ready()
        
        // Получаем информацию о пользователе (если доступна)
        try {
          const user = await sdk.getUser()
          setUserInfo(user)
        } catch (error) {
          console.log("User not logged in or not in Base app")
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Failed to initialize SDK:', error)
        setLoading(false)
      }
    }

    initializeSDK()
  }, [])

  if (loading) {
    return (
      <div style={styles.loading}>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🎉 My Base Mini App</h1>
        <p>Welcome to your minimal Base mini app!</p>
      </header>
      
      <main style={styles.main}>
        {userInfo ? (
          <div style={styles.userCard}>
            <h3>👤 User Info</h3>
            <p>FID: {userInfo.fid}</p>
            <p>Username: {userInfo.username || 'N/A'}</p>
            <p>Display Name: {userInfo.displayName || 'N/A'}</p>
          </div>
        ) : (
          <div style={styles.infoCard}>
            <p>Not running inside Base app or user not logged in</p>
            <p>Try opening this in the Base app!</p>
          </div>
        )}
        
        <div style={styles.features}>
          <h3>✨ Features</h3>
          <ul style={styles.list}>
            <li>✅ Base Mini App SDK integrated</li>
            <li>✅ React.js setup</li>
            <li>✅ Manifest ready</li>
            <li>✅ Auto-hide loading screen</li>
            <li>✅ User info fetching</li>
          </ul>
        </div>
        
        <button 
          style={styles.button}
          onClick={() => alert('Mini App action!')}
        >
          Click Me
        </button>
      </main>
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
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#0052FF',
    color: 'white',
    borderRadius: '12px',
  },
  main: {
    padding: '20px',
  },
  userCard: {
    backgroundColor: '#f0f9ff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '1px solid #bae6fd',
  },
  infoCard: {
    backgroundColor: '#fef3c7',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '1px solid #fbbf24',
  },
  features: {
    backgroundColor: '#f8fafc',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  button: {
    backgroundColor: '#0052FF',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    transition: 'background-color 0.2s',
  },
}

export default App