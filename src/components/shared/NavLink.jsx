'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      style={{
        fontSize: '18px',
        color: isActive ? 'purple' : '#374151',
        fontWeight: isActive ? '700' : '400',
        borderBottom: isActive
          ? '2px solid purple'
          : 'none',
        paddingBottom: '4px',
      }}
    >
      {children}
    </Link>
  )
}

export default NavLink