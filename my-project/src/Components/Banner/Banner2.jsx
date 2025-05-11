import React from 'react';
import BannerPng from '../../assets/banner2.png';
import {motion} from 'framer-motion';
import { FadeUp} from '../../utility/animation';

const Banner2 = () => {
  return (
    <section className='bg-red-200'>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-2 ">
       
        {/* Banner Info*/}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1 
            variants={FadeUp(0.5)}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className='text-3xl lg:text-6xl font-bold uppercase text-primary'> Online Store </motion.h1>
              <motion.p
              variants={FadeUp(0.7)}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi tempora maiores iure veniam iste quae soluta. Voluptatum, voluptatem perferendis tenetur debitis quisquam deserunt ex, corporis praesentium eveniet inventore repudiandae?
              </motion.p>
           <motion.p
           variants={FadeUp(0.9)}
           initial='hidden'
           whileInView='visible'
           viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo tempore harum, laboriosam ea cumque!</motion.p>
          
          </div>
        </div>
         {/* Banner Image*/}
         <div className='flex justify-center items-center md:pb-12'>
          <motion.img
          initial={{opacity: 0, x:200, rotate: 20}}
          whileInView={{opacity: 1, x:0, rotate: 0}}
          transition={{duration: 1, delay:0.2}}
          viewport={{once:true}}
          src={BannerPng} alt="" 
          className='w-[280px] sm:w-[350px] md:w-[500px] h-full object-cover drop-shadow '/>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
