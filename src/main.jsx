import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* The Seasons — https://fonts.adobe.com/fonts/the-seasons
   Crie um Web Project na Adobe Fonts, adicione a família e defina no .env:
   VITE_ADOBE_TYPEKIT_ID=abc1xyz   (o trecho do URL use.typekit.net/ABC1XYZ.css) */
const typekitId = import.meta.env.VITE_ADOBE_TYPEKIT_ID
if (typekitId) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://use.typekit.net/${typekitId}.css`
  document.head.appendChild(link)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)