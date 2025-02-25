import MainNavigation from '../MainNavigation'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default Layout
