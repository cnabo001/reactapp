import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import StoreItemForm from './compoments/storeItemForm.tsx'
import { router } from './router/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
