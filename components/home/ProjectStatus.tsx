import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectStatus = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* New Projects */}
          <Link href="/constructions#new-projects" className="block bg-[#094875] p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
          <Link href="/constructions#sold-projects" className=" bg-[#094875] p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
