import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

const Layout = () => {
    const [theme, setTheme ] = useState('nord')

    useEffect(() => {
        document.documentElement.setAttribute( 'data-theme' ,theme)
    } 
    ,[theme])

    const handletheme = () => {
       setTheme(prev => (prev === "nord"? "night":"nord"))
    }
  return (
   <>
    <Header toggletheme={handletheme}/>
    <Outlet />
   </>
  )
}

export default Layout