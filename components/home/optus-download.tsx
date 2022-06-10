import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const SuwasaDownload = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 p-4 bg-blue'>
      <div className='flex flex-col lg:col-span-2 items-center p-4'>
        <h1 className='text-[20px]  text-white leading-[3.5rem] text-center lg:text-left mb-4'>
          A SIMPLE, SEAMLESS SPATIALLY INTEGRATED SYSTEM
        </h1>
        <h2 className='text-[20px]  text-white leading-[3.5rem] text-center lg:text-left'>
          TO COLLECT, MANAGE AND VISUALIZE DATA
        </h2>
      </div>
      <div className='flex items-center  p-10'>
        <FontAwesomeIcon
          icon={faDownload}
          style={{ fontSize: 12, color: '#f0f0f0' }}
        />{' '}
        <span className='uppercase ml-1'>
          <Link href='/contact'> OM16-MEN Remediation Manual</Link>
        </span>
      </div>
    </div>
  )
}

export default SuwasaDownload
