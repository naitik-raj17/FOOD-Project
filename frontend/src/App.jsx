import React from 'react'
import AppRoutes from './routes/AppRoutes'
// import './App.css'
import { useEffect } from 'react'
export const serverUrl="http://localhost:8000"
function App() {
  return (
    <>
    <AppRoutes />
    </>
  )
}

export default App
