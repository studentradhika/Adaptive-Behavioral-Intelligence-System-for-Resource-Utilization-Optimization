import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'  // ⚠️ IMPORTANT
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>   {/* ⚠️ YE MUST HAI */}
    <App />
  </BrowserRouter>
)