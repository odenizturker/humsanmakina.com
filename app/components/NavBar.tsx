'use client';

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

const NavBar = () => { 
    const currentPath = usePathname();
    const links = [
        { label: 'Products', href: '/products' }, { label: 'About Us', href: '/about-us' }
    ]
  return (
    <nav className='flex space-x-6 border-b px-10 h-25 items-center'>
        <div className="avatar">
            <div className="w-24 rounded">
                <img src="/logo.png"/>
            </div>
        </div>
        <p className='font-bold text-neutral'>Hümsan Tarım ve Hayvancılık Ekipmanları</p>
        {/* TODO: Add Other Pages
        <ul className='flex space-x-10'>
            {links.map(link =>
            <Link 
            key={link.href}
            className={classnames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover: text-zinc-700 transition-colors': true
            })}
            href={link.href}>
                {link.label}
            </Link>
        )}
        </ul> */}
    </nav>
  )
}

export default NavBar