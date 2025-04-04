import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import Navbar from './assets/Components/Navbar.jsx'
import RouterConfig from './RouterConfig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <BrowserRouter>
     <Navbar/>
     <RouterConfig/>
  </BrowserRouter>
  </StrictMode>,
)
