import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Time from './Time.jsx'
import Flexer from './Flexer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
    <Time />
    <Flexer />
  </StrictMode>,
)
