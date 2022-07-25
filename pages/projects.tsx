import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hiring from '../components/home/hiring'
import Navbar from '../components/Navbar'
import { CLIENTS_LOGOS, SITE_TITLE } from '../lib/constants'
import styles from '../styles/Home.module.css'
import {
  faWifi,
  faFileExport,
  faMobile,
  faSliders,
  faCertificate,
  faMapMarkedAlt,
  faEnvelope,
  faDraftingCompass,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import Carousel from '../components/common/Carousel'
import OptusDownload from '../components/home/optus-download'

const Optus: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [message, setMessage] = useState<string>()

  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>

        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          OC Copier Mobile App
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          Streamlines the workflow of any office
        </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
          <div className='p-8'>
            <p>
              <span className='text-bold text-blue'>Technologies: </span>
              GraphQL, ReactJS, PWA, MySQL
            </p>
            <h1 className='text-[24px] pt-2 text-gray-400'>
              Multiple Platforms: Android, iOS
            </h1>
            <p className='text-gray-600'>
              <span className='text-bold text-black'>Features: </span>Provides a
              way to generate barcode with contact and printer info, to make
              service requests one-click away by scaning QR code, and attaching
              photos
            </p>
            <div className='w-full relative h-96 p-1 mt-2'>
              <Image
                src={'/assets/occopier-2.jpeg'}
                alt='pipeline'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>

          <div className='relative h-96 p-1'>
            <Image
              src={'/assets/occopier.jpeg'}
              alt='fitting'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          Internet of Things (IoT)
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          Connect your devices worldwide for remote monitoring
        </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
          <div className='p-8'>
            <p>
              <span className='text-bold text-blue'>
                Microsoft IoT partner{' '}
              </span>
            </p>
            <h1 className='text-[24px] pt-2 text-gray-400'>
              Increase asset reliability with predictive maintenance
            </h1>
            <p className='text-gray-600'>
              <span className='text-bold text-black'>Features: </span>Start
              innovating today with Internet of Things (IoT) starter kits that
              include development boards that are Azure Certified for IoT,
              sensors, and actuators. Use the easy-to-follow tutorials and
              seamlessly connect your devices to the cloud.
            </p>
          </div>

          <div className='relative h-96 p-1'>
            <Image
              src={'/assets/bg.png'}
              alt='fitting'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>LDAR</h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          EnTech: Leak Detection And Repair
        </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
          <div className='p-8'>
            <p>
              <span className='text-bold text-blue'>Technologies: </span>
              GraphQL, ReactJS, PWA, MySQL
            </p>
            <h1 className='text-[24px] pt-2 text-gray-400'>
              Multiple Platforms: windows, android, ios, chrome, mac
            </h1>
            <p className='text-gray-600'>
              <span className='text-bold text-black'>The Inspiration: </span>
              Andmap is utilizing latest technologies - GraphQL API, ReactJS and
              Indexed DB to enrich offline data collection mobile solutions, for
              Oil and Gas industries.
            </p>
            <div className='w-128 relative h-96 p-1'>
              <Image
                src={'/assets/ldar.ipad.png'}
                alt='fitting'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>

          <div className='relative h-96 p-1'>
            <Image
              src={'/assets/ldar-mobile.png'}
              alt='fitting'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </main>

      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          E-Commerce
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          Ingram Micro: Canada site
        </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
          <div className='p-8'>
            <p>
              <span className='text-bold text-blue'>Technologies: </span>
              Bootstrap, jQuery, ReactJS, CSS/SCSS
            </p>
            <h1 className='text-[24px] pt-2 text-gray-400'>
              Multiple Platforms: windows, android, ios, chrome, mac
            </h1>
            <p className='text-gray-600'>
              <span className='text-bold text-black'>Front end: </span>
              Build front end solutions for company e-commerce site, collaborate
              with a diverse team of designers, developers, and engineers
            </p>
          </div>

          <div className='relative h-96 p-1'>
            <Image
              src={'/assets/ingram-micro.png'}
              alt='fitting'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </main>

      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          OCR Mortgage App
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>Pacific Home Loans </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
          <div className='p-8'>
            <p>
              <span className='text-bold text-blue'>Technologies: </span>
              C#/OCR
            </p>
            <h1 className='text-[24px] pt-2 text-gray-400'>
              Desktop Application
            </h1>
            <p className='text-gray-600'>
              <span className='text-bold text-black'>
                OCR for Mortgage Documents:{' '}
              </span>
              is a solution for all such problems that occur due to manual
              processing and management.
            </p>
          </div>

          <div className='relative h-96 p-1'>
            <Image
              src={'/assets/done.jpeg'}
              alt='fitting'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </main>

      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          Mobile apps
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          Android Java Native, ReactNative
        </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
          <div className='p-8'>
            <p>
              <span className='text-bold text-blue'>Technologies: </span>
              Java, Google Map API, SOAP webservice in .Net
            </p>
            <h1 className='text-[24px] pt-2 text-gray-400'>Android / iOS</h1>
            <p className='text-gray-600'>
              <span className='text-bold text-black'>PocketFinder: </span>
              take the complexities of emerging GPS and wireless technologies
              and deliver a simple, easy-to-use solution that will increase your
              ability to stay connected
            </p>

            <div className='grid grid-cols-2 gap-4 '>
              <div className='w-128 relative h-96 p-1'>
                <Image
                  src={'/assets/pocketfinder.jpeg'}
                  alt='fitting'
                  layout='fill'
                  objectFit='contain'
                />
              </div>

              <div className='w-128 relative h-96 p-1'>
                <Image
                  src={'/assets/pocketfinder2.jpeg'}
                  alt='fitting'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>

          <div className='relative h-96 p-1'>
            <div className='p-8'>
              <p>
                <span className='text-bold text-blue'>Technologies: </span>
                Java, Google Map API, Rest API, PHP
              </p>
              <h1 className='text-[24px] pt-2 text-gray-400'>Android / iOS</h1>
              <p className='text-gray-600'>
                <span className='text-bold text-black'>
                  USCCA Concealed Carry App:{' '}
                </span>
                USCCA is a membership-based organization that provides shield
                protection with firearm education, CCW training, and legal
                protection.
              </p>

              <div className='grid grid-cols-2 gap-4 '>
                <div className='w-128 relative h-96 p-1'>
                  <Image
                    src={'/assets/uscca.png'}
                    alt='fitting'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          OPTUS MAINTENANCE project
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          HFC FIELD WALKOUT MEN REMEDIATION
        </p>

        <div className='p-8 border-blue'>
          <p>
            <span className='text-bold text-blue'>Technologies: </span>
            Android JAVA / C# / ASP.Net
          </p>
          <h1 className='text-[24px] pt-2 text-gray-400'>Android</h1>
          <p className='text-gray-600'>
            <span className='text-bold text-black'>HFC FIELD WALKOUT: </span>
            Andmap helps Lendlease to perform HFC Node audits to Optus{`'`}s
            existing RF Network and want to capture the audit data
            electronically and then importing the results directly into the
            Optus PNI System (Spatialnet). more details...
          </p>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
            <div className='w-128 relative h-96 p-1'>
              <Image
                src={'/assets/1140x500-2.png'}
                alt='fitting'
                layout='fill'
                objectFit='contain'
              />
            </div>

            <div className='w-128 relative h-96 p-1'>
              <Image
                src={'/assets/1140x500.png'}
                alt='fitting'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </main>

      <main className={styles.main}>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <h2 className='text-[30px] text-bold pb-2 uppercase mt-2'>
          SUWASA PROJECT
        </h2>
        <p className='text-[14px] pt-2 text-gray-400'>
          Ebonyi State Water Corporation (EBSWC) USAID-funded
        </p>

        <div className='p-8 border-blue'>
          <p>
            <span className='text-bold text-blue'>Technologies: </span>
            Android JAVA / C# / ASP.Net
          </p>
          <h1 className='text-[24px] pt-2 text-gray-400'>Android</h1>
          <p className='text-gray-600'>
            <span className='text-bold text-black'>
              Water Distribution Network Mapping:{' '}
            </span>
            Andmap supports the Ebonyi State Water Corporation (EBSWC) water
            distribution network mapping exercise. The goal of the exercise is
            to provide EBSWC with an interactive, easily updated mapping toolbox
            that can be used as a foundation for the corporation’s asset
            management, maintenance, research and planning. more details...
          </p>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-6 border-b-1 border-blue'>
            <div className='w-32 relative h-48 p-1'>
              <Image
                src={'/assets/suwasa.png'}
                alt='fitting'
                layout='fill'
                objectFit='contain'
              />
            </div>

            <div className='w-128 relative h-96 p-1'>
              <Image
                src={'/assets/suwasa-1.png'}
                alt='fitting'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </main>

      <OptusDownload />
      <Footer />
    </div>
  )
}

export default Optus
