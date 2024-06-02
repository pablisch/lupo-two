import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserSettingsProvider } from './context/userSettingsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserSettingsProvider>
      <App />
    </UserSettingsProvider>
  </React.StrictMode>,
)
