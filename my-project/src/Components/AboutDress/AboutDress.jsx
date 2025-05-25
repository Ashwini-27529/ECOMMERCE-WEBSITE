import React from 'react';
import { motion } from 'framer-motion';

const AboutDress = () => {
  return (
    <div className="container pt-20 mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        className="text-4xl font-bold text-center mb-6 text-red-600"
      >
        About Brand Info
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
        className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6"
      >
        Dress shopping is an exciting experience that lets you explore a wide variety of styles,
        colors, and fabrics to match your personality and occasion. Whether you're shopping for a
        casual outing, a formal event, or a traditional celebration, there are countless designs
        available from elegant gowns to trendy summer dresses. Our collection ensures comfort,
        style, and quality at every step.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.6 }}
        className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
      >
        Explore our curated collection of dresses that cater to every occasion, from evening gowns
        to cocktail dresses, all designed with you in mind. We focus on providing high-quality materials and
        styles that are on-trend yet timeless. Whether you prefer a classic look or something more
        modern, there's a perfect dress waiting for you.
      </motion.p>
    </div>
  );
};

export default AboutDress;
