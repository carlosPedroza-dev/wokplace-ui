import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Authentication from './components/Auth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authentication />
  </StrictMode>,
)
