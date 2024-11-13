import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextState } from './context/contextState.jsx'

createRoot(document.getElementById('root')).render(
<ContextState>
    <App />
    </ContextState>

)
