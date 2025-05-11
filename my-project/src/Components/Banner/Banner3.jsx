import React from 'react';
import BannerPng from '../../assets/flower.png';
import {motion} from 'framer-motion';
import { FadeLeft} from '../../utility/animation';

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  

};
const Banner3 = () => {
  return (
    <section className=' mt-12 container mb-12'>
    <div 
    style={bgStyle}
    className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
      {/* Banner Image*/}
      <div ></div>
      {/* blank div*/}
      <div className='flex flex-col justify-center '>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px] '>
          <motion.h1 
          variants={FadeLeft(0.5)}
          initial='hidden'
          whileInView='visible'
          viewport={{once:true}}
          className='text-3xl lg:text-6xl font-bold uppercase text-primary pt-10'> Shop Smarter 
           <br />
           <span className='text-black' > Live </span>  Better </motion.h1>
            <motion.p
            variants={FadeLeft(0.7)}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi tempora maiores iure veniam iste quae soluta. Voluptatum, voluptatem perferendis tenetur debitis quisquam deserunt ex, corporis praesentium eveniet inventore repudiandae?
            </motion.p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner3;
