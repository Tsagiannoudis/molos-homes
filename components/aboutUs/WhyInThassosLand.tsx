import React from "react";
import Image from "next/image";

const WhyInThassosLand = () => {
  return (
 <section className="py-20 md:py-30 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#5D9DCD]">
            Why in Thassos?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 pt-4 grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 items-center">
            <p>
                Thassos, in comparison to the rest of the Greek islands, is quite underdeveloped and offers incredible opportunities for those with an interest of building or buying a home in the sun on one of the most beautiful and unspoiled islands of the Mediterranean.
            </p>
            <p>
                As more and more people discover Thassos, Greeks and foreigners alike, it is becoming more and more popular among retirees searching for a new home in a quiet and healthy environment and family vacationers who love travelling to Greece regularly.
            </p>
            <p>
                With a warm and sunny climate, lush green mountains surrounded by the sparkling blue Aegean, an abundancy of Greek culture, countless beaches and nature trails, increasing business opportunities and only a 35 minute ferry ride from the European mainland, Thassos is ideal for those seeking a better way of life, in the short or long term.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:order-first">
          <Image
            src="/images/aboutPage/WhyInThassosLand.webp"
            alt="Why in Thassos Land"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyInThassosLand;