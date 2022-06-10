import Image from 'next/image'
import InstagramIcon from './svg-components/InstagramIcon'
import TwitterIcon from './svg-components/TwitterIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 bg-veryLightBlue p-16'>
        <div className='md:col-span-2 lg:col-span-3'>
          <Image
            src={'/assets/andmap.logo.png'}
            alt='logo'
            width={64}
            height={20}
          />
          <div className='text-sm text-fontGray'>© 2022 Andmap LLC.</div>
          <div className='text-sm text-fontGray'>
            - Developer of software solutions -
          </div>
        </div>
        <div>
          <div className=' uppercase text-sm mt-4 mb-4 px-2'>
            CUSTOMIZED SOLUTIONS
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 12 }} />{' '}
            <span className='text-sm text-gray-500 '>
              <Link href='/suwasa'>Suwasa</Link>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 12 }} />{' '}
            <span className='text-sm text-gray-500 '>
              <Link href='/optus'>Optus</Link>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 12 }} />{' '}
            <span className='text-sm text-gray-500 '>
              <Link href='/pdfocr'>OCR Mortgage Documents</Link>
            </span>
          </div>
        </div>
        <div>
          <div className=' uppercase text-sm mt-4 mb-4'>QUICK LINKS</div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 12 }} />{' '}
            <span className='text-sm text-gray-500 '>
              <Link href='/contact'>Contact</Link>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 12 }} />{' '}
            <span className='text-sm text-gray-500 '>
              <Link href='/about'>About</Link>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 12 }} />{' '}
            <span className='text-sm text-gray-500 '>
              <Link href='/projects'>Latest Projects</Link>
            </span>
          </div>
        </div>
        <div>
          <div className=' uppercase text-sm mt-4 mb-4'>FOLLOW US</div>

          <div className='md:flex-auto md:flex-row mt-1 flex-row flex'>
            <a href='/#' className='w-6 mx-1'>
              <TwitterIcon className='hover:cursor-pointer hover:fill-blue fill-brightBlue ' />
            </a>
            <a href='/#' className='w-6 mx-1'>
              <InstagramIcon className='hover:cursor-pointer hover:fill-blue fill-brightBlue ' />
            </a>
          </div>
        </div>
      </div>
      {/*}
      <div className='bg-veryLightBlue pt-2 '>
        <div
          className='flex pb-4 px-3 m-auto pt-4 border-t text-gray-800 text-sm flex-col
     md:flex-row max-w-6xl'
        >
          <div>© 2022 Andmap LLC.</div>

          <div className='md:flex-auto md:flex-row-reverse mt-1 flex-row flex'>
            <a href='/#' className='w-6 mx-1'>
              <TwitterIcon className='hover:cursor-pointer hover:fill-blue fill-brightBlue ' />
            </a>
            <a href='/#' className='w-6 mx-1'>
              <InstagramIcon className='hover:cursor-pointer hover:fill-blue fill-brightBlue ' />
            </a>
          </div>
        </div>
      </div>
  */}
    </div>
  )
}

export default Footer
