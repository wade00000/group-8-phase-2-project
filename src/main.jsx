import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {SearchProvider } from './context/searchContext.jsx'
import { CollectionProvider } from './context/collectionContext.jsx';
import routes from './routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Loader.css'
import './index.css'






const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <CollectionProvider> 
        <RouterProvider router={router} />
      </CollectionProvider>
    </SearchProvider>
  </StrictMode>
);
