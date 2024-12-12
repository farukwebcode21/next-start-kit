'use client'

import { useRouter, usePathname } from 'next/navigation'

const ContactButton = () => {
  const router = useRouter()
  const pathname = usePathname()

  // Check if the current route matches '/contact'
  const isActive = pathname === '/contact'

  const handleClick = () => {
    router.push('/contact')
  }
  return (
    <button
      onClick={handleClick}
      className={isActive ? 'text-cyan-500' : ''}
      aria-current={isActive ? 'page' : undefined}
    >
      Contact
    </button>
  )
}

export default ContactButton
