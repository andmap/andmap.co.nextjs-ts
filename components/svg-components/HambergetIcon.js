import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { DropdownContext } from '../../stores/DropdownContext'

const HambergerIcon = () => {
  const { isOpen: globalIsOpen, toggle: gloablToggle } = useContext(
    DropdownContext
  )

  const first = useSpring({
    transform: globalIsOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 7px) rotate(0deg)',
  })

  const second = useSpring({
    transform: globalIsOpen
      ? 'translate(10px, 4px) rotate(45deg)'
      : 'translate(2px, 19px) rotate(0deg)',
  })

  const third = useSpring({
    transform: globalIsOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 31px) rotate(0deg)',
  })

  const toggleHandler = () => {
    gloablToggle(!globalIsOpen)
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      fill='hsl(228, 39%, 23%)'
      viewBox='0 0 44 44'
      onClick={toggleHandler}
    >
      <animated.rect width='40' height='6' rx='2' style={first} />
      <animated.rect width='40' height='6' rx='2' style={second} />
      <animated.rect width='40' height='6' rx='2' style={third} />
    </svg>
  )
}

export default HambergerIcon
