import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-200 to-pink-100 px-4">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-4xl font-bold text-green-700 mb-6"
      >
         Hurry! Successfully Ordered!
      </motion.h1>

      <motion.button
     
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
      >
        Go to Home
      </motion.button>
    </div>
  );
};

export default OrderSuccess;
