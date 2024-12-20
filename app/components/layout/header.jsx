import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'

const Header = () => {
  return (
    <header className='bg-gray-100 p-4'>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          {/* <li>
            <NavLink href='/contact'>Contact</NavLink>
          </li> */}
          <ContactButton />
        </ul>
      </nav>
    </header>
  )
}

export default Header
