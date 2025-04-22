import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {SearchProvider } from './context/searchContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>,
)
