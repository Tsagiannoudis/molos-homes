'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { slides } from '@/data/heroSectionSliderHome';


const HeroSection = () => {
  // Autoplay plugin
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000 })]);

  return (
    <>
      <section className="embla relative w-full h-256 overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide relative flex-[0_0_100%] h-full" key={index}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
              {/* Overlay για καλύτερη αναγνωσιμότητα του κειμένου */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex h-full flex-col items-center justify-end p-8 text-center text-white md:p-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-shadow-lg">{slide.subtitle}</p>
                <Link href="/contact" className="bg-[#5D9DCD] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#094875] transition-colors duration-300 w-fit">
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

};

export default HeroSection;