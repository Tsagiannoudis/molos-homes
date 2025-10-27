import React from "react";
import Image from "next/image";

const AboutThassosLand = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left lg:order-last">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#5D9DCD]">
            About Thassos Land
          </h2>
          <div className="space-y-4 text-lg text-gray-700 pt-16">
            <p>
                The variations of land types available on Thassos are many. It has the potential to fullfil any desire one may have while searching for and purchasing their dream property. As the value and price of property increase at a progressively faster rate, there’s no better day than today to find and buy your small piece of paradise on Thassos.
            </p>
            <p>
                From beach-front property facing the Aegean to land on the mountain side overlooking the sea, you will have many options when deciding what is perfect for you. If you desire to live in a remote area where you can find the privacy and quiet you need, or if you wish to become a part of one of the communities in the area, mostly consisting of villages that maintain their own unique culture and traditions unlike any other, all that and more is available to you on Thassos.
            </p>
            <p>
                Flat land to grow your gardens, hilly olive groves that offer natural beauty like nothing you’ll find in any other place, views of the mountains and sea almost everywhere you look. Thassos will certainly have something special and unique to offer you.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/About_ThassosLand.webp"
            alt="About Thassos Land"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutThassosLand;