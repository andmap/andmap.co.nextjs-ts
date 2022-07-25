import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Hero = () => {
  return (
    <div className='relative p-10 bg-veryLightBlue'>
      <div className='flex flex-col items-center '>
        <h1 className='text-[40px] lg:text-5xl text-darkBlue leading-[3.5rem] text-center lg:text-left'>
          Transform your ideas to
        </h1>
        <h2 className='text-[70px] text-blue'>REALITY</h2>
        <div className='w-[35px] h-[2px] bg-blue' />
        <h5 className='text-[20px] text-darkBlue leading-[3.5rem] mt-6 text-center'>
          <div className={styles.typewritertext}>
            Developer at your service...
          </div>
        </h5>
        <p className='text-gray-400 text-[16px] mt-1 mb-5 w-[350px] text-center'>
          Web, Mobile and IoT
        </p>
      </div>
    </div>
  )
}

export default Hero
