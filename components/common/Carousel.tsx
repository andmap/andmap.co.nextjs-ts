import { useState, useRef, useEffect, FC } from 'react'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ClientLogo {
  title: string
  link: string
  imageUrl: string
}

const Carousel: FC<{ data: ClientLogo[] }> = ({ data }) => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<any>(null)
  const [totalPage, setTotalPage] = useState(1)
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const moveTo = (to: number) => {
    setCurrentIndex(to)
  }

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0

    setTotalPage(
      Math.ceil(carousel.current.scrollWidth / carousel.current.offsetWidth)
    )
  }, [])

  return (
    <div className='carousel my-12 mx-auto'>
      <div className='relative overflow-hidden'>
        <div
          ref={carousel}
          className='carousel-container px-6 relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0'
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className='carousel-item text-center relative w-24 h-12 align-middle'
              >
                <a
                  href={resource.link}
                  className='h-full w-full aspect-[2/1] block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 '
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className='w-full aspect-[2/1] hidden '
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className='text-center'>
        {totalPage > 1 &&
          [...new Array(totalPage)].map((_, index) => (
            <button
              key={index}
              onClick={() => moveTo(index)}
              className='hover:bg-blue-900/75 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300'
            >
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  index === currentIndex ? 'text-blue' : 'text-gray-600'
                }
                style={{ fontSize: 14 }}
              />
            </button>
          ))}
      </div>
    </div>
  )
}

export default Carousel
