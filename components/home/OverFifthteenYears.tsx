import React from "react";
import Image from "next/image";

const OverFifthteenYears = () => {
  return (
    <section className="bg-gray-100 py-30">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#5D9DCD]">
            Over 15+ Years of Experience
          </h2>
          <div className="space-y-4 text-lg text-gray-700 pt-16">
            <p>
              Our company works hard to provide top quality homes at Skala Potamias
              that are meant to last, with top-of-the-line materials and a drive to
              satisfy our customers 100%.
            </p>
            <p>
              We at Molos Homes know how important it is to have a comfortable and stable structure that can provide for your every need, and we don’t settle for anything less.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/Over_15+_years_of_experience.webp"
            alt="Over 15+ years of experience"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OverFifthteenYears;