import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-200 to-red-400 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="text-red-600 font-semibold">Full Basket</span>! We are passionate about providing 
          the best products and services to our customers. Our mission is to ensure a seamless shopping 
          experience with top-quality items.
        </p> 

        <div className="border-t border-gray-300 my-6"></div>

        <p className="text-lg text-gray-700">
          We believe in quality, trust, and customer satisfaction. Explore our curated collection and enjoy a 
          hassle-free shopping journey with us.
        </p>
      </div>
    </div>
  );
};

export default About;
