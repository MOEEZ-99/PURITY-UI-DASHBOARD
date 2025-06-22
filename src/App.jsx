import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './Pages/Dashboard'
import MenuContextProvider from './context/MenuContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MenuContextProvider>
    <div className='grid xl:grid-cols-[280px_1fr] grid-cols-[auto_1fr] h-screen overflow-hidden'>
      <div className='h-screen overflow-hidden'>
      <Sidebar />
      </div>
      <div className='px-4 overflow-auto z-20'>
      <Outlet />
      </div>
    </div>
    </MenuContextProvider>
  )
}

export default App
