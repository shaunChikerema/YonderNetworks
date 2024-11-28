import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded border border-gray-300 h-32"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
