import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.scss'
import { AuthContextProvider } from "./context/authContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
      </AuthContextProvider>
  </React.StrictMode>,
)
