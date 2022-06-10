import { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { DropdownContext } from '../stores/DropdownContext'
import Link from 'next/link'

const Dropmenu = () => {
  const { isOpen: globalIsOpen, toggle: gloablToggle } =
    useContext(DropdownContext)

  const menuApper = useSpring({
    transform: globalIsOpen ? 'translate3D(0,0,0)' : 'translate3D(0, -40px,0)',
    opacity: globalIsOpen ? 1 : 0,
  })

  return (
    <>
      {globalIsOpen && (
        <animated.div
          className='absolute top-32 bg-white z-20 left-4 w-11/12 px-5 py-10 rounded-sm shadow-md'
          style={menuApper}
        >
          <ul className='flex flex-col justify-center items-center gap-y-7 uppercase'>
            <li className='text-darkBlue font-bold'>
              <Link href='/solutions'>solutions</Link>
            </li>
            <li className='text-darkBlue font-bold'>
              <Link href='/about'>About</Link>
            </li>
            <li className='text-darkBlue font-bold'>
              {' '}
              <Link href='/contact'>CONTACT</Link>
            </li>
            <li className='text-darkBlue font-bold'>
              {' '}
              <Link href='/login'>Login</Link>
            </li>
          </ul>
        </animated.div>
      )}
      {globalIsOpen && (
        <div
          className='fixed inset-0 bg-gradient-to-b from-white/25 via-black/60 to-black/80 z-10'
          onClick={() => gloablToggle(!globalIsOpen)}
        ></div>
      )}
    </>
  )
}

export default Dropmenu
