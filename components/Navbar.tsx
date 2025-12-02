import React from 'react'
import { FloatingNav } from './ui/FloatingNavbar'
import { FaHome } from 'react-icons/fa'

const Navbar = () => {
  return (
    <FloatingNav navItems={[{name:'Home', link:'/',icon:<FaHome/>}]}/>
  )
}

export default Navbar