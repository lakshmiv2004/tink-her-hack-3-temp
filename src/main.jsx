import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FoodProvider } from './components/FoodContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodProvider>
    <App />
    </FoodProvider>
  </StrictMode>,
)
