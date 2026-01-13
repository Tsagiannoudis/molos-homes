'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

type ProjectGalleryProps = {
  photos: string[];
  projectTitle: string;
};

const ProjectGallery = ({ photos, projectTitle }: ProjectGalleryProps) => {
  const [index, setIndex] = useState(-1);

  if (!photos || photos.length === 0) {
    return null; // Μην εμφανίζεις τίποτα αν δεν υπάρχουν φωτογραφίες
  }

  const slides = photos.map(photo => {
    if (photo.endsWith('.mp4')) {
      return {
        type: 'video' as const,
        sources: [
          {
            src: photo,
            type: 'video/mp4',
          },
        ],
      };
    }
    return { src: photo };
  });

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            {photo.endsWith('.mp4') ? (
              <>
                <video src={photo} className="object-cover w-full h-full" muted playsInline loop />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <PlayCircleIcon className="w-16 h-16 text-white" />
                </div>
              </>
            ) : (
              <Image src={photo} alt={`Gallery image ${i + 1} for ${projectTitle}`} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
            )}
          </div>
        ))}
      </div>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} slides={slides} index={index} plugins={[Video]} />
    </div>
  );
};

export default ProjectGallery;
