import Logo from '../ui/Logo'
import MenuDropdown from './MenuDropdown'

function Navbar() {
  return (
    <div className='flex items-center justify-end bg-black p-3'>
      <Logo />
      <MenuDropdown />
    </div>
  )
}
export default Navbar
