import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; //  Import useNavigate

const Checkout = () => {
  const navigate = useNavigate(); //  Create navigate instance

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.address) newErrors.address = 'Shipping Address is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Select a payment method';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //  Navigate to success page on valid form
      navigate('/success');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    // ... Your existing JSX
     <div className="container pt-16 mx-auto py-12 px-6">
      {/* Checkout Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-4xl font-bold text-center mb-8 text-red-600"
      >
        Checkout
      </motion.h1>

      {/* Billing Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        className="bg-red-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Billing Information</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              rows="4"
              placeholder="Enter your shipping address"
              value={formData.address}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <p className="block text-gray-700 font-medium mb-2">Payment Method</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleInputChange}
                className="form-radio text-red-600 mr-2"
              />
              Cash on Delivery
            </label>
            {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Order
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Checkout;
