import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SoldProjects } from '@/data/soldProjectsData';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

// --- Generate Static Paths ---
// Δημιουργεί τις σελίδες για κάθε project κατά το build time για καλύτερο SEO και απόδοση.
export async function generateStaticParams() {
  return SoldProjects.map((project) => ({
    slug: project.slug,
  }));
}

// --- Generate Dynamic Metadata ---
// Δημιουργεί δυναμικά τον τίτλο και την περιγραφή της σελίδας.
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // ✅ Από Next.js 14+ το params είναι Promise — πρέπει να το κάνουμε await
  const { slug } = await params;
  const project = SoldProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `Molos Homes | ${project.title}`,
    description: project.shortDescription,
    openGraph: {
      title: `Molos Homes | ${project.title}`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

// --- Page Component ---
export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const project = SoldProjects.find((p) => p.slug === decodedSlug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* --- Header --- */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{project.title}</h1>
          <p className="mt-3 text-lg text-gray-500">{project.date}</p>
        </div>

        {/* --- Main Image --- */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-16">
          <Image
            src={project.image}
            alt={`Εικόνα για το project ${project.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Details & Photo Gallery --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Details Section */}
          <div className="lg:col-span-2 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Details</h2>
            {project.moreDetails.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Photo Gallery Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.photos?.map((photo, index) => (
                <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                  <Image src={photo} alt={`Gallery image ${index + 1} for ${project.title}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
