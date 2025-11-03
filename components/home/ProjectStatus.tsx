"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ProjectStatus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Τρέχει το animation μόνο μία φορά
    threshold: 0.1,    // Ενεργοποιείται όταν το 10% του στοιχείου είναι ορατό
  });

  return (
    <section ref={ref} className="py-10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* New Projects */}
          <Link 
            href="/new-projects" 
            className={`block transform bg-[#094875] p-8 rounded-lg text-center shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <Image 
                src="/images/homePage/new-projects-white.png"
                alt="New Projects"
                width={200}
                height={200}
                className="w-26 h-26 justify-self-center mb-6"
            />
            <h3 className="text-3xl font-bold text-[#c3c3c3] mb-4">
              New Projects
            </h3>
            <p className="text-white">
              See all new projects that will become yours
            </p>
          </Link>

          {/* Sold Projects */}
          <Link 
            href="/sold-projects" 
            className={`block transform bg-[#094875] p-8 rounded-lg text-center shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <Image 
                src="/images/homePage/selling-projects-white.png"
                alt="Sold Projects"
                width={200}
                height={200}
                className="w-26 h-26 justify-self-center mb-6"
            />
            <h3 className="text-3xl font-bold text-[#c3c3c3] mb-4">
              Sold Projects
            </h3>
            <p className="text-white">
              See the quality and craftsmanship of our completed and sold properties.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatus;
