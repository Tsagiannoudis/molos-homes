import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const HeroSectionContact = () => {

  return (
    <>
      <section className="relative w-full h-156 overflow-hidden">
        <div className="flex h-full">
          <Image
            src={"/images/contactPage/contactUsHero.webp"}
            alt={"about us hero image"}
            fill
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
          {/* Overlay για καλύτερη αναγνωσιμότητα του κειμένου */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="relative z-10 flex h-full flex-col items-center justify-end p-8 text-center text-white md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Contact Us
            </h1>
          </div>         
        </div>
      </section>
    </>
  );

};

export default HeroSectionContact;