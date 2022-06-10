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
import { submitContactForm } from './api/api-helper'
import Carousel from '../components/common/Carousel'
import OptusDownload from '../components/home/optus-download'

const Optus: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [message, setMessage] = useState<string>()
  const resetForm = () => {
    setName('')
    setNotes('')
    setEmail('')
  }
  const onSubmit = (name: string, email: string, message: string) => {
    setMessage('processing...')

    const contactInput = {
      name,
      email,
      notes,
      website: 'andmap.co',
    }

    submitContactForm(contactInput)
      .then((result) => {
        resetForm()
        setMessage('Thanks, we will contact you soon.')
      })
      .catch((error) => setMessage(error.message))
  }

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
            <h2 className='text-[30px] text-bold pb-2'>Fieldwork solution</h2>
            <p className='text-[14px] mb-8 text-blue'>Telecommunication</p>
            <p className='text-gray-400'>
              A specific custom version of the generic Andmap app has been
              configured for Telecommunication
            </p>
            <div className='p-8'>
              <ul className='list-disc'>
                <li>Customized Icon</li>
                <li>Customized Style</li>
                <li>MEN Required</li>
                <li>Customer Drop</li>
              </ul>
            </div>

            <div className='flex-auto w-full relative h-64 p-4 mt-4'>
              <Image
                src={'/assets/optus-2.png'}
                alt='customized icon/style'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>

          <div className='p-16 '>
            <div className='w-full relative h-96'>
              <Image
                src={'/assets/1140x500-view.png'}
                alt='project map'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>

        <h2 className='text-[30px] text-bold pb-2 uppercase mt-16'>
          Sample Data
        </h2>
        <div className='w-[35px] h-[2px] bg-blue ' />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 p-16'>
          <div className='w-72 relative h-96 p-8'>
            <Image
              src={'/assets/master1.png'}
              alt='pipeline'
              layout='fill'
              objectFit='contain'
            />
          </div>

          <div className='w-72 relative h-96 p-8'>
            <Image
              src={'/assets/reference.data.png'}
              alt='fitting'
              layout='fill'
              objectFit='contain'
            />
          </div>

          <div className='w-72 relative h-96 p-8'>
            <Image
              src={'/assets/optus.forms.png'}
              alt='form'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </main>
      <OptusDownload />
      <Footer />
    </div>
  )
}

export default Optus
