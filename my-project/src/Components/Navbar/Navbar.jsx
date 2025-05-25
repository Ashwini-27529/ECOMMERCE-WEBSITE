import React, { useContext } from 'react';
import { GiVineLeaf } from "react-icons/gi";
import { ImCart } from "react-icons/im";
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';

const NavMenu = [
  { id: 1, title: "Home", link: "/Home" },
  { id: 2, title: "Products", link: "/Products" },
  { id: 3, title: "About", link: "/About" },
  { id: 5, title: "Contacts", link: "/Contact" },
];

const Navbar = () => {
  const { cart, popupMessage } = useContext(CartContext); 
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-300 to-red-400 shadow-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="container  flex justify-between items-center py-4" 
        >
          {/* Logo */}
          <div className="text-xl flex items-center gap-1 font-bold uppercase">
            <p className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 text-transparent bg-clip-text">Full</p>
            <p className="bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-transparent bg-clip-text">Basket</p>
            <GiVineLeaf className="text-green-900 text-xl" />
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-primary">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_2px_0_-1px_#fb923c] font-medium"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <Link to="/Cart">
                  <ImCart className="text-2xl text-primary hover:text-secondary transition-colors duration-200" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-6 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl" />
          </div>
        </motion.div>
      </nav>

      {/* Popup Message */}
      <AnimatePresence>
        {popupMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50"
          >
            {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
