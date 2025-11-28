import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Login.jsx'
import BingoGame from './BingoGame.jsx'
import MainRouter from './MainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BingoGame/>
  </StrictMode>,
)
