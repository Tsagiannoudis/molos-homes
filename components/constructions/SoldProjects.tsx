'use client'
import Image from 'next/image';
import Link from 'next/link';
import { SoldProjects } from '@/data/soldProjectsData';
import { useInView } from 'react-intersection-observer';


const SoldProjectList = () => { 
    const { ref, inView } = useInView({
        triggerOnce:true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="w-full bg-[#F3F3F3]">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
                              <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Our Sold Projects</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Explore our portfolio of sold properties in Thassos, showcasing our commitment to quality and excellence in construction.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    {[...SoldProjects].reverse().map((project) => (
                        <article key={project.id} className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative w-full h-64">
                                <Image
                                    src={project.image}
                                    alt={`Εικόνα για το project ${project.title}`}
                                    fill
                                    className="object-cover animate-bounce-in"
                                />
                            </div>
                            <div className="flex flex-col flex-grow p-6">
                                <p className="text-sm font-semibold text-gray-500 mb-2">{project.date}</p>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                                <p className="text-gray-700 mb-6 flex-grow">{project.shortDescription}</p>
                                <div className="mt-auto">
                                    <Link href={`/sold-projects/${project.slug}`} className="inline-block bg-[#094875] text-white font-semibold py-2 px-5 rounded-ss-xl rounded-br-xl group-hover:bg-[#5D9DCD] transition-colors duration-300">
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
    </section>
  );
};

export default SoldProjectList;