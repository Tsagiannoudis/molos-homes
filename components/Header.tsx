'use client';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hamburger from './Hamburger';


const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Constructions', href: '/constructions' },
    { label: 'About Us', href: '/aboutUs' }, 
    { label: 'Contact', href: '/contact' },
  ];

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
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-3 rounded-md transition-colors duration-300 ${
                  pathname === link.href
                    ? 'bg-[#094875] text-white'
                    : 'hover:bg-[#0991f3] hover:text-black'
                }`}> 
                {link.label}               
              </Link>
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
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 text-lg w-full text-center ${
                    pathname === link.href
                      ? 'bg-[#094875] text-black'
                      : 'hover:bg-[#0991f3] hover:text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
