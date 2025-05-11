import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import HeroPng from '../../assets/shoppingirl.png';
import Chain from '../../assets/chain.png';
import { motion } from 'framer-motion';
import { FadeRight } from '../../utility/animation';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-red-200'>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeRight(0.6)}
              initial='hidden'
              animate='visible'
              className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'
            >
              Shop Now
              <br />
              Live <span className='text-primary'>Stylish!</span>
            </motion.h1>

            <motion.p
              variants={FadeRight(0.9)}
              initial='hidden'
              animate='visible'
              className='text-2xl tracking-wide'
            >
              Discover the Best Deals & Unique Finds at Your Fingertips!
            </motion.p>

            <motion.p
              variants={FadeRight(1.2)}
              initial='hidden'
              animate='visible'
              className='text-gray-400'
            >
              Discover a world of convenience and endless choices at our online shopping store—your one-stop destination for everything you need!
            </motion.p>

            {/* Button section */}
            <motion.div
              variants={FadeRight(1.5)}
              initial='hidden'
              animate='visible'
              className='flex justify-center md:justify-start'
            >
              <button
                className='primary-btn flex items-center gap-2'
                onClick={() => navigate('/products')}
              >
                <span><IoBagHandleOutline /></span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className='flex justify-center items-center'>
          <motion.img
            variants={FadeRight(0.9)}
            initial={{ opacity: 0, x: 200, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1.2, x: 0, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            src={HeroPng}
            alt="Hero"
            className='w-[350px] md:w-[650px] drop-shadow'
          />
        </div>

        {/* Chain image */}
        <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[-10deg]'>
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            src={Chain}
            alt="Chain"
            className='w-full md:max-w-[300px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
