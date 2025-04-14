import { createRoot } from 'react-dom/client'
import './globals.css'
import { AppProviders } from './providers/app-providers'

createRoot(document.getElementById('root')!).render(<AppProviders />)
