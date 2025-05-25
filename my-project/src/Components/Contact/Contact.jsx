import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-red-400 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We'd love to hear from you! Reach out using the information below.
        </p>

        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-700 hover:text-red-500 transition duration-300">
             Email: 
            <a href="mailto:support@fullbasket.com" className="ml-2 text-red-600 hover:underline">
              support@fullbasket.com
            </a>
          </p>

          <p className="text-lg font-semibold text-gray-700 hover:text-red-500 transition duration-300">
             Phone: 
            <a href="tel:+1234567890" className="ml-2 text-red-600 hover:underline">
              +123 456 7890
            </a>
          </p>

          <p className="text-lg font-semibold text-gray-700 hover:text-red-500 transition duration-300">
             Address:
            <span className="ml-2 text-gray-600">123 Market Street, Shopping City</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
