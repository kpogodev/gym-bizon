import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full min-h-screen bg-[#111]'>
      <Outlet />
    </div>
  )
}
export default Layout
