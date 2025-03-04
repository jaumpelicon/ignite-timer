import { HeaderContainer } from './header_styles'
import logoIgnite from '../../assets/ignite-logo.svg'
import { Timer, Scroll } from '@phosphor-icons/react'

import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
