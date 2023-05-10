import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import AuthPrivider from './AuthProvider/AuthPrivider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPrivider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthPrivider>
  </React.StrictMode>,
)
