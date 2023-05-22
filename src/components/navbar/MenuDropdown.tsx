import { Menu, Transition } from '@headlessui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const mockItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

function MenuDropdown() {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='rounded-full border border-[#333] p-2 text-lg text-primary transition-colors hover:bg-secondary'>
        <BsThreeDotsVertical />
      </Menu.Button>
      <Transition
        enter='transition ease-out duration-200'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-out duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Menu.Items
          as='ul'
          className='absolute right-0 top-full mt-2 flex w-[200px] flex-col gap-1 rounded-md bg-secondary p-2'
        >
          {mockItems.map((item, index) => (
            <Menu.Item key={index} as='li' className='text-primary hover:text-secondary transition-colors cursor-pointer'>
              {item}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default MenuDropdown
