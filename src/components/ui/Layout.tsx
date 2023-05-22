import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Layout = () => {
  return (
    <div className='flex min-h-screen w-full flex-col bg-primary'>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default Layout
