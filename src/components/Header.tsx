import { HamburgerIcon } from '../assets/icons'
import { memo, useCallback, useEffect, useState } from 'react'
import { Nav } from './Nav'
import { useLocation } from 'react-router'

const Header = memo(() => {
  const location = useLocation()
  const [showNav, setShowNav] = useState<boolean>(false)

  useEffect(() => {
    setShowNav(false)
  }, [location.pathname])

  const onToggleNav = useCallback(() => {
    setShowNav((prev) => !prev)
  }, [])

  return (
    <header className='py-15 max-md:py-4'>
      <div className='flex items-center justify-between'>
        <h1 className='logo text-7xl max-lg:text-5xl max-sm:text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent select-none py-2'>
          Portfolio
        </h1>
        <nav>
          <HamburgerIcon onClick={onToggleNav} />
          <Nav className='max-md:hidden' />
        </nav>
      </div>
      <Nav className={`${showNav ? '' : 'hidden'} md:hidden`} />
    </header>
  )
})

export { Header }
