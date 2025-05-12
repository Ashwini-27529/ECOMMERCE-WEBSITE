import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, } from 'react-icons/fa';
import {motion} from 'framer-motion';
import { GiVineLeaf } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className='bg-primary/10'>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.2, duration:0.5}}
        className='container flex justify-between items-center'>
            {/* Logo  Section */}
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 text-transparent bg-clip-text '>Full</p>
                    <p className='bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-transparent bg-clip-text'>Basket</p>
                    <GiVineLeaf className='text-green-900'/>
                </div>
            {/* Social Media Section */}
            <div className='text-3xl flex items-center gap-4 mt-6 pb-5 text-gray-700'>
             <FaInstagram className='text-red-700'/>
             <FaFacebook className='text-blue-800'/>
             <FaTwitter className='text-blue-500'/>           
           </div>
        </motion.div>
    </footer>
  );
};

export default Footer;
