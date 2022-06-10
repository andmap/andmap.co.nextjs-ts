import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'

const BannerDownload: FC<{ text1: string; text2: string }> = ({
  text1,
  text2,
}) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 p-4 bg-blue'>
      <div className='flex flex-col lg:col-span-2 items-center p-4'>
        <h1 className='text-[20px]  text-white leading-[3.5rem] text-center lg:text-left mb-4'>
          {text1}
        </h1>
      </div>
      <div className='flex items-center  p-10'>
        <FontAwesomeIcon
          icon={faDownload}
          style={{ fontSize: 12, color: '#f0f0f0' }}
        />{' '}
        <span className='uppercase ml-1'>
          <Link href='/contact'>{text2}</Link>
        </span>
      </div>
    </div>
  )
}

export default BannerDownload
