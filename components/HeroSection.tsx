import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-600">Welcome to Yonder Networks</h1>
        <p className="text-gray-700 mt-4 text-lg">
          Transforming the way you work, innovate, and create.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
