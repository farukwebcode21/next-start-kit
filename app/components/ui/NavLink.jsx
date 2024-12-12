'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  console.log(pathname)

  return (
    <Link
      className={isActive ? 'text-cyan-500' : ''}
      aria-current={isActive ? 'page' : undefined}
      href={href}
      {...rest}
    />
  )
}

export default NavLink
