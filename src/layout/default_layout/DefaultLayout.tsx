import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { LayoutContainer } from './default_layout_styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
