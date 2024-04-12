import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
export const server="https://teamsync-backend-xhr1.onrender.com/api/auth";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
