import React from 'react';

const MoreThanFifthteenYears = () => {
  return (
<section className="py-20 md:py-30 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-left mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            More than 15 years of experience in design and construction
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="w-full text-justify lg:order-2">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Molos Homes in Skala Potamia, Thassos, undertakes design, construction and sale of houses and maisonettes primarily in the Golden Beach area of the emerald island of Thassos.
              </p>
              <p>
                Our company works hard to provide top quality homes that are meant to last, with top-of-the-line materials and a drive to satisfy our customers 100%. We at Molos Homes know how important it is to have a comfortable and stable structure that can provide for your every need, and we don’t settle for anything less.
              </p>
              <p>
                We build our projects having a Greek traditional look while using modern and valued materials. We take pride in the work we do and expect our customers to take pride in the home they live in. We value our customers above everything, and are well known for keeping a close business relationship with them even after they make a purchase. We are so confident about our work, we encourage you to contact any of our customers and speak to them one-on-one!
              </p>
            </div>
          </div>
          {/* YouTube Player Column */}
          <div className="w-full lg:order-1">
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/emMKfyT1E8A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanFifthteenYears;

