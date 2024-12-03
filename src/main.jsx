import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style files/chapters.css'
import './style files/videos.css'
import './style files/about.css'
import './style files/help.css'
import App from './App'
import './style files/contact.css'
import './style files/loginpage.css'
import './style files/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
