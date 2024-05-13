import React from 'react'
import { FaBars } from 'react-icons/fa'

import '@/styles/burger.sass'

// props type
type TypeProps = {
  openNav: () => void
}

const Burger = ({ openNav }: TypeProps) => {
  return (
    <div className="flex_container">
      <button className="log btn">Login</button>
      <button className="reg btn">Sign up</button>
      <FaBars onClick={openNav} className="burger_icon" />
    </div>
  )
}

export default Burger
