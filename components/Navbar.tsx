import Image from 'next/image'
import Dropmenu from './DropMenu'
import HambergerIcon from './svg-components/HambergetIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const route = useRouter().route

  const getClassNameOfLink = (link: string) =>
    route === link
      ? 'text-blue hover:cursor-pointer hover:text-blue uppercase'
      : ' hover:cursor-pointer hover:text-blue uppercase'
  return (
    <div className='flex justify-between items-center  h-[44px] p-10 bg-veryLightBlue'>
      <Link href='/'>
        <a>
          <Image
            src={'/assets/andmap.logo.png'}
            alt='logo'
            width={82}
            height={26}
          />
        </a>
      </Link>
      <ul className='hidden lg:flex text-md gap-8 text-darkBlue'>
        <li className={getClassNameOfLink('/')}>
          <Link href='/'>home</Link>
        </li>

        <li className={getClassNameOfLink('/solutions')}>
          <Link href='/solutions'>solutions</Link>
        </li>
        <li className={getClassNameOfLink('/about')}>
          <Link href='/about'>About</Link>
        </li>

        <li className={getClassNameOfLink('/contact')}>
          <Link href='/contact'>CONTACT</Link>
        </li>
      </ul>
      <Link href='/login'>
        <button className='hidden lg:block rounded-3xl bg-brightRed text-white py-3 px-7 shadow-md shadow-brightRedLight text-[13px] hover:cursor-pointer hover:bg-brightRedLight transition duration-300'>
          Get Started
        </button>
      </Link>
      <div className='block lg:hidden hover:cursor-pointer relative z-40'>
        <HambergerIcon />
      </div>
      <Dropmenu />
    </div>
  )
}

export default Navbar
