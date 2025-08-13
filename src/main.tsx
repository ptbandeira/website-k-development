import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App'
import Home from './pages/Home'
import Method from './pages/Method'
import Shop from './pages/Shop'
import Professionals from './pages/Professionals'
import Origin from './pages/Origin'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { ShopProvider } from './shop'   // ← add this

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'method', element: <Method /> },
      { path: 'shop', element: <Shop /> },
      { path: 'professionals', element: <Professionals /> },
      { path: 'origin', element: <Origin /> },
      { path: 'faqs', element: <FAQs /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopProvider>                  {/* ← wrap everything */}
      <RouterProvider router={router} />
    </ShopProvider>
  </React.StrictMode>
)
