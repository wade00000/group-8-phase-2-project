import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {SearchProvider } from './context/searchContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CollectionProvider } from './context/collectionContext.jsx';
import './Styles/Loader.css'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <CollectionProvider> {/* ✅ Wrap the router here */}
        <RouterProvider router={router} />
      </CollectionProvider>
    </SearchProvider>
  </StrictMode>
);
