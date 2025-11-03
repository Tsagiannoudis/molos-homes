'use client';
import { useState, Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hamburger from './extraComponents/Hamburger';


const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navLinks = [
    { label: 'Home', href: '/' },
    { 
      label: 'Constructions', 
        submenu: [
          { label: 'New Projects', href: '/new-projects' },
          { label: 'Sold Projects', href: '/sold-projects' },
        ]
    },
    { label: 'About Us', href: '/aboutUs' }, 
    { label: 'Contact', href: '/contact' },
  ];

  const handleSubmenuToggle = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 mx-auto text-black h-min">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
             <Image
              src="/images/logo.png" 
              alt="Molos Homes Logo"  
              width={320} 
              height={80}
              priority />
        </Link>
        {/* Desktop Menu */}
        <ul className='hidden lg:flex gap-6'>
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.submenu ? (
                <>
                  <div className={`rounded-md transition-colors duration-300 flex items-center gap-1 cursor-default `}>
                      <span>{link.label}</span>
                      <ChevronDownIcon className="h-4 w-4" />
                  </div>
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.label}>
                        <Link href={sublink.href} className="block px-4 py-2 text-black hover:bg-[#0991f3] hover:text-white">
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`px-3 py-3 rounded-md transition-colors duration-300 ${
                    pathname === link.href
                      ? 'bg-[#094875] text-white'
                      : 'hover:bg-[#0991f3] hover:text-black'
                  }`}> 
                  {link.label}               
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='lg:hidden'>
          <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center gap-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full text-center">
                {link.submenu ? (
                  <Fragment>
                    <button
                      onClick={() => handleSubmenuToggle(link.label)}
                      className={`px-4 py-2 rounded-md transition-colors duration-200 text-lg w-full text-center flex justify-center items-center gap-2 ${
                        pathname.startsWith('/new-projects') || pathname.startsWith('/sold-projects') ? 'text-[#094875] font-semibold' : ''
                      }`}
                    >
                      {link.label}
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === link.label && (
                      <ul className="bg-gray-100 rounded-md mt-2 py-2">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.label}>
                            <Link href={sublink.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-[#0991f3] hover:text-white">
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Fragment>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md transition-colors duration-200 text-lg w-full text-center block ${
                      pathname === link.href
                        ? 'bg-[#094875] text-white'
                        : 'hover:bg-[#0991f3] hover:text-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
