import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
