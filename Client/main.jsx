import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import "../Client/index.css"
import './App.css'
import { AuthProvider } from '../Client/src/Context/Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App  />
    </AuthProvider>
  </React.StrictMode>,
)
