import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hiring from '../components/home/hiring'
import Navbar from '../components/Navbar'
import { SITE_TITLE } from '../lib/constants'
import styles from '../styles/Home.module.css'
import {
  faCloud,
  faLanguage,
  faMobile,
  faBitcoinSign,
  faCertificate,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>

        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div className='p-16'>
            <h2 className='text-[40px] text-bold pb-10'>About</h2>

            <p className='text-[20px] pb-2'>
              25+ years’ experiences in software development
            </p>
            <p>
              We mainly focus on customized application development with React /
              GraphQL / NoSQL while provide our traditional mapping/data
              collection service.
            </p>
            <div className='bg-veryLightGray p-2 mt-4 relative h-64'>
              <Image
                src={'/assets/sample.data.png'}
                alt='sample data'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>

          <div className='p-16'>
            <h2 className='text-[30px] text-bold pb-2'>Technologies</h2>
            <div className='w-[35px] h-[2px] bg-blue mb-8' />
            <div className='grid grid-cols-2 gap-4'>
              <div className='m-2'>
                <FontAwesomeIcon
                  icon={faCloud}
                  className='text-blue'
                  style={{ fontSize: 36 }}
                />{' '}
                <p className='text-[20px] text-bold pb-2'>cloud integration</p>
                <p className='text-[14px] pb-2 text-blue'>
                  GCP, Amazon EC2, Azure, Heroku, Firebase
                </p>
              </div>
              <div className='m-2'>
                <FontAwesomeIcon
                  icon={faLanguage}
                  className='text-blue'
                  style={{ fontSize: 36 }}
                />{' '}
                <p className='text-[20px] text-bold pb-2'>languages</p>
                <p className='text-[14px] pb-2 text-blue'>
                  ReactJS / NodeJS / ASP.Net / C# / JAVA / GraphQL
                </p>
              </div>
              <div className='m-2'>
                <FontAwesomeIcon
                  icon={faMobile}
                  className='text-blue'
                  style={{ fontSize: 36 }}
                />{' '}
                <p className='text-[20px] text-bold pb-2'>mobile development</p>
                <p className='text-[14px] pb-2 text-blue'>
                  ReactNative, Java, Object C
                </p>
              </div>
              <div className='m-2'>
                <FontAwesomeIcon
                  icon={faBitcoinSign}
                  className='text-blue'
                  style={{ fontSize: 36 }}
                />{' '}
                <p className='text-[20px] text-bold pb-2'>Smart Contract</p>
                <p className='text-[14px] pb-2 text-blue'>Blockchain, NFT</p>
              </div>
              <div className='m-2'>
                <FontAwesomeIcon
                  icon={faCertificate}
                  className='text-blue'
                  style={{ fontSize: 36 }}
                />{' '}
                <p className='text-[20px] text-bold pb-2'>certificates</p>
                <p className='text-[14px] pb-2 text-blue'>
                  Oracle OCP, Certified J2EE, Microsoft
                </p>
              </div>
              <div className='m-2'>
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  className='text-blue'
                  style={{ fontSize: 36 }}
                />{' '}
                <p className='text-[20px] text-bold pb-2'>GIS Mapping</p>
                <p className='text-[14px] pb-2 text-blue'>ArcGIS, KML/KMZ</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Hiring />
      <Footer />
    </div>
  )
}

export default About
