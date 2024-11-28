import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Cutting-Edge Software",
      description: "Empowering creativity and productivity with next-gen tools.",
      icon: "⚙️",
    },
    {
      title: "Seamless Collaboration",
      description: "Tools designed to bring teams together and improve workflows.",
      icon: "🤝",
    },
    {
      title: "Enterprise Solutions",
      description: "Reliable, scalable tools tailored to industry-specific needs.",
      icon: "🏢",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-blue-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
