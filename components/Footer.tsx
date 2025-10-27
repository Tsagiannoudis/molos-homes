import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#094875] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Molos Homes</h3>
            <p className="text-gray-400">
              Building quality homes in Thassos with passion and precision.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <nav>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li className="mb-2">
                  <Link href="/constructions" className="hover:text-white transition-colors">Constructions</Link>
                </li>
                <li className="mb-2">
                  <Link href="/aboutUs" className="hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <p className="mb-2">Dimitris Klimatos</p>
            <p className="mb-2">Skala Potamia, Thassos, Greece 64004</p>
            <p className="mb-2">
              Tel: <a href="tel:+306948603738" className="hover:text-white transition-colors">+30 6948 603738</a>
            </p>
            <p>
              E-mail: <a href="mailto:moloshomesthasos@gmail.com" className="hover:text-white transition-colors">moloshomesthasos@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-white-500">
          <p>&copy; {new Date().getFullYear()} Molos-Homes - tSagian Projects</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;