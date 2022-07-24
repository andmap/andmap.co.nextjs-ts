import Image from 'next/image'
import Link from 'next/link'

const Hiring = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 p-4 bg-blue'>
      <div className='flex flex-col lg:col-span-2 items-center p-4'>
        <h1 className='text-[40px]  text-white leading-[3.5rem] text-center lg:text-left mb-4'>
          WANT TO HIRE
        </h1>
        <h2 className='text-[20px]  text-white leading-[3.5rem] text-center lg:text-left uppercase'>
          Local and Hard working PEOPLE FOR YOUR PROJECT?
        </h2>
      </div>
      <div className='flex items-center  p-10'>
        <h1 className='text-[16px] lg:text-5xl text-darkBlue leading-[3.5rem] text-center lg:text-left'>
          <Link href='/contact'>Start Project</Link>
        </h1>
      </div>
    </div>
  )
}

export default Hiring
