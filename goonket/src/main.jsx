import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Goonket from './Goonket.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Goonket />
  </StrictMode>,
)
