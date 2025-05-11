import React from 'react';
import BannerPng from '../../assets/banner1.png';
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Banner = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <section className='bg-red-300'>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-12">
        {/* Banner Image */}
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            src={BannerPng} alt="" 
            className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'
          />
        </div>
        {/* Banner Info */}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1 
              variants={FadeUp(0.5)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='text-3xl lg:text-6xl font-bold uppercase text-primary'
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi tempora maiores iure veniam iste quae soluta. Voluptatum, voluptatem perferendis tenetur debitis quisquam deserunt ex, corporis praesentium eveniet inventore repudiandae?
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo tempore harum, laboriosam ea cumque!
            </motion.p>
            {/* Button Section */}
            <motion.div 
              variants={FadeUp(1.1)}
              initial='hidden'
              animate='visible'
              className='flex justify-center md:justify-start'
            >
              <button
                className='primary-btn'
                onClick={() => navigate('/about-dress')} // Navigate to the new page when clicked
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
