import React from 'react'
import { FaBars } from 'react-icons/fa'

import '@/styles/burger.sass'

type TypeProps = {
  openNav: () => void
}

const Burger = ({ openNav }: TypeProps) => {
  return (
    <div className="flex_container">
      <FaBars onClick={openNav} className="burger_icon" />
    </div>
  )
}

export default Burger
